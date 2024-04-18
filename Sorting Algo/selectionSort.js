let arr =  [3,4,2,100,7,1,9,0]

for (let i = 0; i < arr.length; i++) {
   let smallIndex = i
   
   //loop for finding small number index
    for (let j = i+1; j < arr.length; j++) {
       if(arr[smallIndex] > arr[j]){
        smallIndex = j
       }
    }

    //swap
    // [arr[i] , arr[smallIndex]] = [arr[smallIndex] , arr[i]]
    [arr[smallIndex] , arr[i]] = [arr[i] , arr[smallIndex]]
    // let temp = arr[smallIndex];
    // arr[smallIndex] = arr[i]
    // arr[i] = temp
    
}

console.log(arr)