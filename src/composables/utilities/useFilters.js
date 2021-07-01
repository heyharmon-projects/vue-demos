export default {
    /**
     * Filter an array of objects.
     *
     * @param {array} array      array of objects
     * @param {type}  conditions object where keys are filtered by their value
     *
     * @returns {array}
     */
    filterArray(array, conditions) {
        return array.filter((item) => {
            for (var key in conditions) {
                if (item[key] === undefined || item[key] != conditions[key])
                return false;
            }
            return true;
        })
    }
};
