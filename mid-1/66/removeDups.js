function removeDups(arr){
    let result = [];
    for(let i = 0 ; i < arr.length; i++){
        if(i === arr.indexOf(arr[i])){
            result.push(arr[i])
        }
        else{
            continue
        }
    }
    return result
}


console.log(removeDups([1,0,1,0]))
console.log(removeDups(["The","big","cat"]))
console.log(removeDups(["John","Taylor","John"]))