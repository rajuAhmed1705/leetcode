/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbl = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    var result = 0;

    var sArray = s.split("");

    for (let i = 0; i < sArray.length; i++) {
        if (symbl[sArray[i]] < symbl[sArray[i + 1]]) {
            result -= symbl[sArray[i]];
        } else {
            result += symbl[sArray[i]];
        }
    }

    console.log(sArray);
    console.log(result);

    return result;
};

romanToInt("XIII");
