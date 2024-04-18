function reverseString(str) {
    // Base case: if the string is empty or has only one character
    if (str === "" || str.length === 1) {
        return str;
    } else {
        // Recursive step: reverse the substring from the second character onward,
        // then concatenate the first character at the end
        return reverseString(str.substring(1)) + str[0];
    }
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("world")); // Output: "dlrow"
// console.log(reverseString(""));      // Output: ""
// console.log(reverseString("a"));     // Output: "a"
//let sum = 0
function reverseNum(num , sum=0) {

    if(num == 0 ){
        return sum
    }
    sum = sum * 10 + (num%10)
    return reverseNum(Math.floor(num / 10) , sum)
}

let num = 1234;

console.log(reverseNum(num))

const reverseNum1 = (n) =>
  n < 10
    ? String(n)
    : String (n % 10) + reverseNum1 (Math .floor (n / 10))


console .log (reverseNum1 (8675309))


