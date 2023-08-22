function highestDigit(num){
    let nums = num.toString().split('');
    let SortedNums = nums.sort();
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === SortedNums[SortedNums.length-1]){
            return (nums[i])
        }
    }
}
console.log(highestDigit(379))
console.log(highestDigit(2))
console.log(highestDigit(377401))