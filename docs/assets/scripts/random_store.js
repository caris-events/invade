var random_store = {
    init() {},

    items(amount) {
        return this.random(
            amount,
            db_random_items.map(item => new RandomItem(item))
        )
    },

    vocabs(amount) {
        return this.random(
            amount,
            db_random_vocabs.map(vocab => new RandomVocab(vocab))
        )
    },

    random(amount, source) {
        this.shuffle(source)
        return source.slice(0, amount)
    },

    shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
    },
}

/**
 * RandomItem
 */

class RandomItem {
    constructor(item) {
        this.code = item[0]
        this.name = item[1]
        this.name_alias = item[2]
        this.owner_index = item[3]
        this.type_index = item[4]
        this.invasion_index = item[5]
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
    get invasion_level() {
        return db_store["item_invasion_level"][this.invasion]
    }
}

/**
 * RandomVocab
 */

class RandomVocab {
    constructor(vocab) {
        this.word = vocab[0]
        this.correct_word = vocab[1]
    }
}
