//we ll be having two part
//1.sorted part
//2.unsorted part

let array = [2,4,6,1,3,5]

for (let i = 1; i < array.length; i++) {
    let sortedEle = array[i]
    let j = i-1
    while(j>=0 && sortedEle < array[j]){
        array[j+1] = array[j]
        j--
    }
    //placement
    array[j+1] = sortedEle
    
}