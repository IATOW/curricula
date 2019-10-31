let storage = {};

export default {
    set: function (key, val) {
        storage[key] = val
    },
    get: function (key) {
        return storage[key]
    }
}