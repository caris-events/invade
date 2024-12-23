var vocab_store = {
    vocabs: [],
    categories: [],

    search_keyword: "",
    search_category: "",
    search_show_language: false,
    search_show_sexual: false,
    shown_results: [],
    hidden_results: [],

    loading_timer: null,
    count_per_page: 51,

    is_loading: true,

    // init
    init() {
        if (db_vocabs !== undefined) {
            this.vocabs = db_vocabs.map(vocab => new Vocab(vocab))
        }
        this.categories = this.listCategories()
        this.parseParams()
        this.search()
    },

    calculateCategory(category) {
        if (category == "") {
            return this.vocabs.length
        }
        return this.vocabs.filter(v => v.category == category).length // weak compare because category is String()
    },

    resetFilter() {
        this.search_category = ""
        this.search_show_language = false
        this.search_show_sexual = false
        this.updateParams()
        this.search()
    },

    // parseParams
    parseParams() {
        var url_params = new URLSearchParams(location.search)
        var q = url_params.get("q") // keyword
        var c = url_params.get("c") // category code
        var se = url_params.get("se") // show explicit
        var ss = url_params.get("ss") // show sexual

        if (q !== null && q !== "") {
            this.search_keyword = q.trim()
        }
        if (c !== null && c !== "") {
            this.search_category = c.trim()
        }
        if (se !== null && se !== "") {
            this.search_show_language = se.trim() === "true"
        }
        if (ss !== null && ss !== "") {
            this.search_show_sexual = ss.trim() === "true"
        }
    },

    // updateParams
    updateParams() {
        var url_params = new URLSearchParams(location.search)

        if (this.search_category !== "") {
            url_params.set("c", this.search_category)
        } else {
            url_params.delete("c")
        }
        if (this.search_show_language === true) {
            url_params.set("se", this.search_show_language)
        } else {
            url_params.delete("se")
        }
        if (this.search_show_sexual === true) {
            url_params.set("ss", this.search_show_sexual)
        } else {
            url_params.delete("ss")
        }
        if (this.search_keyword.trim() !== "") {
            url_params.set("q", this.search_keyword.trim())
        } else {
            url_params.delete("q")
        }
        window.history.replaceState(null, null, "?" + url_params.toString())
    },

    // filterResults
    filterResults() {
        var filtered_results = this.vocabs

        if (this.search_category !== "") {
            filtered_results = filtered_results.filter(v => {
                return v.category === this.search_category
            })
        }

        if (!this.search_show_language && this.search_category != "SWEAR") {
            filtered_results = filtered_results.filter(v => {
                return v.explicit !== "LANGUAGE"
            })
        }
        if (!this.search_show_sexual) {
            filtered_results = filtered_results.filter(v => {
                return v.explicit !== "SEXUAL"
            })
        }
        return filtered_results
    },

    search() {
        this.is_loading = true

        this.updateParams()

        this.hidden_results = []
        this.shown_results = []

        if (this.loading_timer !== null) {
            clearTimeout(this.loading_timer)
        }

        this.loading_timer = setTimeout(() => {
            var filtered_results = this.filterResults()

            if (this.search_keyword === "") {
                this.hidden_results = filtered_results.sort((a, b) => a.time - b.time)
            } else {
                var fuse = new Fuse(filtered_results, {
                    keys: ["word", "correct_word"],
                    threshold: 0.4,
                })
                this.hidden_results = fuse.search(this.search_keyword.trim()).map(v => v.item)
            }

            this.showMore(true)
            this.is_loading = false
        }, Math.random() * (300 - 200) + 300)
    },

    shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    },

    showMore(ignore_loading) {
        if (ignore_loading === true) {
            this.shown_results = [...this.shown_results, ...this.hidden_results.slice(0, this.count_per_page)]
            this.hidden_results = this.hidden_results.slice(this.count_per_page)
            return
        }
        this.is_loading = true

        if (this.loading_timer !== null) {
            clearTimeout(this.loading_timer)
        }

        this.loading_timer = setTimeout(() => {
            this.shown_results = [...this.shown_results, ...this.hidden_results.slice(0, this.count_per_page)]
            this.hidden_results = this.hidden_results.slice(this.count_per_page)
            this.is_loading = false
        }, Math.random() * (300 - 200) + 300)
    },

    listCategories() {
        return db_store["vocab_categories"].map(code => {
            return {
                code: new String(code), // prevent "" being omitted in attribute
                str: code ? db_store["vocab_category_str"][code] : "全部",
            }
        })
    },
}

class Vocab {
    constructor(vocab) {
        this.word = vocab[0]
        this.category_index = vocab[1]
        this.correct_word = vocab[2]
        this.time = vocab[3]
        this.explicit_index = vocab[4]
    }
    get category() {
        return db_store["vocab_categories"][this.category_index]
    }
    get explicit() {
        return db_store["vocab_explicits"][this.explicit_index]
    }
}
