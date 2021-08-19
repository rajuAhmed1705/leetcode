/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const parenObject = {
            "(": ")",
            "{": "}",
            "[": "]",
        },
        stack = [];

    for (let i = 0; i < s.length; i++) {
        if (parenObject.hasOwnProperty(s.charAt(i))) {
            stack.push(parenObject[s.charAt(i)]);
        } else {
            if (stack.length === 0) return false;
            if (s.charAt(i) != stack.pop()) return false;
        }
    }
    if (stack.length > 0) {
        return false;
    }
    return true;
};

console.log(isValid("{()}"));
