function capToFront(str){
    let lower = []
    let upper = []
    let arr = str.split('')
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            upper.push(arr[i])
        }else{
            lower.push(arr[i])
        }
    }
    return upper.concat(lower).join('')

}
console.log(capToFront("hApPy"))
console.log(capToFront("moveMENT"))
console.log(capToFront("shOrtCAKE"))

