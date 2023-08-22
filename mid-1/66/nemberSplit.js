function numberSplit(num){
    let arr = []
    if(num % 2 === 0){
        arr.push(num/2)
        arr.push(num/2)
        return arr
    }else{
        arr.push(Math.floor(num/2))
        arr.push(Math.ceil(num/2))
        return arr
    }
}
    
console.log(numberSplit(4))
console.log(numberSplit(10))
console.log(numberSplit(11))
console.log(numberSplit(-9))