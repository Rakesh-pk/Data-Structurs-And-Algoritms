

let arr = ["apple", "mango", "apple","apple",
          "orange","apple", "mango", "mango"];

let arr1 = [1,3,2,2,4,2,4,5,5,5]
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) == index);
}
// console.log(removeDuplicates(arr1));


const counts = arr.reduce((acc, curVal) => {
    // Increment the count for the current element
    acc[curVal] ? ++acc[curVal] : acc[curVal] = 1
    return acc;
}, {});
console.log('All counts',counts)

// let dupCounts = Object.entries(counts).reduce((acc , [key,val])=>{
//     if(val>1){
//         acc[key] = val
//     }
//     return acc
// },{})

const duplicates = Object.entries(counts).filter(([_, count]) => count > 1);

console.log('duplicate counts',duplicates)

// const counts1 = arr.reduce((acc, curr) => {
//     // Increment the count for the current element
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});n