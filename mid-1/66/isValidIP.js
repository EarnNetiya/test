function isVaildIP(Ip){
    let arr = Ip.spit('.')
    
    if(arr.length !== 4){
        return false
    }else if(arr[0] === '0'){
        return false
    }else if(arr[0+1] === '0'){
        return false
    }
    return true
   
}

console.log("1.2.3.4")// true
console.log("1.2.3")// false
console.log("1.2.3.4.5")// false
console.log("123.456.67.89")// true
console.log("123.456.78.90")// false
console.log("123.045.067.089")// false