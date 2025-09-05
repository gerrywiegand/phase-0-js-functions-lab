function calculateTax (amount){
    amount * .1
}
function convertToUpperCase(text) {
    return text.convertToUpperCase
}
function findMaximum(num1, num2) {
    if (num1 > num2) {return num1}
    else {
        return num2
    }
}


function isPalindrome(word) {
    let j = word.length - 1 
    for (let i = 0; i < word.length / 2; i++) {
if (word[i] != word[j]) {
    return false;
}
j--;
    }
    return true;
}

function calculateDiscountedPrice (originalPrice, discountPercentage) {
   return originalPrice - (originalPrice * discountPercentage)
   
}



// This is required for the test to function properly  
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };