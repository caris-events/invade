var item_store = {
    items: [],
    categories: [],
    invasions: [],
    owners: [],

    search_keyword: "",
    search_category: "",
    search_type: "",
    search_owner: "",
    search_invasion: "",
    search_related_code: "",

    shown_results: [],
    hidden_results: [],

    loading_timer: null,
    count_per_page: 50,

    is_loading: true,

    // init
    init() {
        if (db_items !== undefined) {
            this.items = db_items.map(item => new Item(item))
        }
        this.categories = this.listCategories()
        this.invasions = this.listInvasions()
        this.owners = this.listOwners()
        this.parseParams()
        this.search()
    },

    calculateCategory(category) {
        if (category == "") {
            return this.items.length
        }
        return this.items.filter(v => v.category == category).length // weak compare because category is String()
    },

    // resetRelatedCode
    resetRelatedCode() {
        this.search_related_code = ""
        this.updateParams()
        this.search()
    },

    resetFilter() {
        this.search_category = ""
        this.search_type = ""
        this.search_owner = ""
        this.search_invasion = ""
        this.updateParams()
        this.search()
    },

    // parseParams
    parseParams() {
        var url_params = new URLSearchParams(location.search)
        var q = url_params.get("q") // keyword
        var c = url_params.get("c") // category code
        var r = url_params.get("r") // related code
        var t = url_params.get("t") // type code
        var i = url_params.get("i") // invasion code
        var o = url_params.get("o") // owner code

        if (q !== null && q !== "") {
            this.search_keyword = q.trim()
        }
        if (c !== null && c !== "") {
            this.search_category = c.trim()
        }
        if (t !== null && t !== "") {
            this.search_type = t.trim()
        }
        if (o !== null && o !== "") {
            this.search_owner = o.trim()
        }
        if (i !== null && i !== "") {
            this.search_invasion = i.trim()
        }
        if (r !== null && r !== "") {
            this.search_related_code = r.trim().replace(/\s/g, "")
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
        if (this.search_owner !== "") {
            url_params.set("o", this.search_owner)
        } else {
            url_params.delete("o")
        }
        if (this.search_invasion !== "") {
            url_params.set("i", this.search_invasion)
        } else {
            url_params.delete("i")
        }
        if (this.search_type !== "") {
            url_params.set("t", this.search_type)
        } else {
            url_params.delete("t")
        }
        if (this.search_related_code !== "") {
            url_params.set("r", this.search_related_code)
        } else {
            url_params.delete("r")
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
        var filtered_results = this.items

        if (this.search_type !== "") {
            filtered_results = filtered_results.filter(v => {
                return v.type === this.search_type
            })
        }
        if (this.search_category !== "") {
            filtered_results = filtered_results.filter(v => {
                return v.category === this.search_category
            })
        }

        if (this.search_owner !== "") {
            filtered_results = filtered_results.filter(v => {
                return v.owner === this.search_owner
            })
        }
        if (this.search_invasion !== "") {
            filtered_results = filtered_results.filter(v => {
                return v.invasion === this.search_invasion
            })
        }
        if (this.search_related_code !== "") {
            var relate_codes = this.findRelatedCodes(filtered_results, this.search_related_code)
            filtered_results = filtered_results.filter(v => {
                return relate_codes.includes(v.code)
            })
        }
        return filtered_results
    },

    //
    findRelatedCodes(items, target_code) {
        var grand_codes = [target_code]
        var relate_codes = []

        for (let that = this.findItem(target_code); that.parent_code !== ""; that = this.findItem(that.parent_code)) {
            grand_codes = [...grand_codes, that.parent_code]
        }

        items.forEach(v => {
            if (grand_codes.includes(v.parent_code)) {
                relate_codes = [...relate_codes, v.code]
            }

            for (let that = v; that.parent_code !== ""; that = this.findItem(that.parent_code)) {
                if (grand_codes.includes(that.parent_code)) {
                    relate_codes = [...relate_codes, v.parent_code]
                }
            }
        })

        return [...new Set(relate_codes)] // .filter(v => v !== target_code)
    },

    // findItem
    findItem(code) {
        return this.items.find(v => v.code === code)
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
                    keys: ["name", "name_alias"],
                    threshold: 0.4,
                })
                this.hidden_results = fuse.search(this.search_keyword.trim()).map(v => v.item)
            }

            this.showMore(true)
            this.is_loading = false
        }, Math.random() * (300 - 200) + 300)
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
        return db_store["item_categories"].map(code => {
            return {
                code: new String(code), // prevent "" being omitted in attribute
                str: code ? db_store["item_category_str"][code] : "全部",
            }
        })
    },

    listInvasions() {
        return db_store["item_invasions"].map(code => {
            return {
                code: new String(code),
                str: code ? db_store["item_invasion_str"][code] : "全部",
            }
        })
    },

    listOwners() {
        return db_store["item_owners"].map(code => {
            return {
                code: new String(code),
                str: code ? db_store["item_owner_str"][code] : "全部",
            }
        })
    },
}

class Item {
    constructor(item) {
        this.code_index = item[0]
        this.parent_code_index = item[1]
        this.category_index = item[2]
        this.name = item[3]
        this.name_alias = item[4]
        this.owner_index = item[5]
        this.type_index = item[6]
        this.invasion_index = item[7]
        this.time = item[8]
    }
    get code() {
        return db_item_codes[this.code_index]
    }
    get parent_code() {
        return this.parent_code_index === -1 ? "" : db_item_codes[this.parent_code_index]
    }
    get category() {
        return db_store["item_categories"][this.category_index]
    }
    get category_str() {
        return db_store["item_category_str"][this.category]
    }
    get owner() {
        return db_store["item_owners"][this.owner_index]
    }
    get owner_str() {
        return db_store["item_owner_str"][this.owner]
    }
    get type() {
        return db_store["item_types"][this.type_index]
    }
    get type_str() {
        return db_store["item_type_str"][this.type]
    }
    get invasion() {
        return db_store["item_invasions"][this.invasion_index]
    }
    get invasion_str() {
        return db_store["item_invasion_str"][this.invasion]
    }
}
