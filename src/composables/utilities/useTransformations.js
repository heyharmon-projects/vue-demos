export default {
    trim(val, length) {
        if (typeof val === "string") {
            if (val.length >= length || val.length === length) {
                return val.substring(0, length) + '...'
            }
            return val
        }
        return val
    },

    capitalize(val) {
        if (typeof val === "string") {
            return val.charAt(0).toUpperCase() + val.slice(1)
        }
        return val
    },

    uppercase(val) {
        if (typeof val === "string") {
            return val.toUpperCase()
        }
        return val
    },

    money(val) {
        if (typeof val === "numeric") {
            return `$${val.toFixed(2)}`
        }
        return val
    }
};
