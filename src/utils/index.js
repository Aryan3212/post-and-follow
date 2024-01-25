/**
 * This function compares two strings and returns an integer indicating their relative order.
 * If the strings are equal, the function returns 0. If the first string is greater than the second, the function returns a positive integer, and if the first string is less than the second, the function returns a negative integer.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {number} An integer indicating the relative order of the two strings.
 */
export function stringComparator(a, b) {
    return a === b ? 0 : (a > b ? 1 : -1)
}


export const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};