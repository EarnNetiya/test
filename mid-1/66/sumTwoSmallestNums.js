function sumTwoSmallestNums(arr){
    let sorted = arr.sort((a,b) => a-b)
    let reult = [];
    for(i = 0; i < sorted.length; i++){
        if(sorted[i] > 0){
            reult.push(sorted[i])
        }else{
            continue
        }
       
        
    }
    return reult[0] + reult[1]
}


console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))//7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]))//3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1]))//8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))//4519
