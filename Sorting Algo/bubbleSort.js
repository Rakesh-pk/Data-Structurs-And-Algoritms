let arr = [-1 ,999, 100,3,6,5,4,9,8,7,1,0,221]

// function swap(a,b){
//     // let temp = a;
//     //  a = b
//     //  b = temp
//   a = a+b
//   b = a-b
//   a = a-b
//   return [a,b]
//   //console.log(a , b)
// }

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length -1; j++) {
    if(arr[j]>arr[j+1]){
       [arr[j+1] , arr[j]] = [arr[j],arr[j+1]]
        //swap
        // arr[i] = arr[i]+arr[j+1]
        // arr[j+1] = arr[i]-arr[j+1]
        // arr[i] = arr[i]-arr[j+1]
      }
  }
}

console.log(arr)