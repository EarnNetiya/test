function capToFront(str){
    let lower = []
    let upper = []
    let result = upper.concat(lower).join('')
    let arr = str.split('')
    for (let i = 0; i < arr.legth; i++){
        if(arr[i] === arr[i].toUpperCase()){
            upper.push(arr[i])
        }else{
            lower.push(arr[i])
        }
    }
    return result
}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))

/// xxxxxxxxxxxxxxxxx