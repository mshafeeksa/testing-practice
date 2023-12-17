export function capitalize(ipString) {
    return ipString.charAt(0).toUpperCase() + ipString.slice(1);
}

export function reverseString(ipString) {
    return ipString.split('').reverse().join('');
}

export const calculator = (function () {
    function add(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    function multiply(num1, num2) {
        return num1 * num2;
    }
    function divide(num1, num2) {
        return ((num2 !== 0) ? num1 / num2 : null);
    }

    return { add, subtract, multiply, divide };    
})();

export function caesarCipher(ipString, shiftValue) {
    let opString = "";
    for (let i = 0; i < ipString.length; i++){
        let newLetter = findCypherLetter(ipString.charAt(i), shiftValue);
        opString += newLetter;
    }
    return opString;
}

function findCypherLetter(ipString, shiftValue) {
    const cipherAlphabet = ".,?!abcdefghijklmnopqrstuvwxyz0123456789";
    let tempString = ipString.toLowerCase();
    const currentIndex = cipherAlphabet.indexOf(tempString);
    let newIndex = currentIndex + shiftValue;
    if (newIndex >= cipherAlphabet.length) {
        newIndex = newIndex - cipherAlphabet.length;
    }
    let opString = cipherAlphabet.charAt(newIndex);
    if (ipString === ipString.toUpperCase()) {
        opString = opString.toUpperCase();
    }
    else
        opString = opString.toLowerCase();

    return opString;
}

export function analyzeArray(ipArray) {
    let sortedArray = mergeSort(ipArray);
    const sum = sortedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / sortedArray.length;
    const min = sortedArray[0];
    const max = sortedArray[sortedArray.length - 1];
    const length = sortedArray.length;
    return {
        average: average,
        min: min,
        max: max,
        length: length
    };
}

function mergeSort(sortArray = []) {
    if (sortArray.length < 2)
        return sortArray;
    else {
        let middle = Math.floor(sortArray.length / 2);
        let newLeftArray = mergeSort(sortArray.slice(0,middle));
        let newRightArray = mergeSort(sortArray.slice(middle));
        let finalArray = [];
        let i = 0;
        let j = 0;
        while (i < newLeftArray.length || j < newRightArray.length) {
            if ((j >= newRightArray.length) || newLeftArray[i] < newRightArray[j])
                finalArray.push(newLeftArray[i++]);
            else
                finalArray.push(newRightArray[j++]);
        }
        return finalArray;
    }
}