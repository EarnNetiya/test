function jumpingFrog(n, arr) {
    let count = 1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 1){
            count++
            
        }
        
        else if(arr[i] === 0){
            return "no chance :-("
        }
       
        else if(arr[i] === 3){
            count--
        }
    }
    return count

}



console.log(jumpingFrog(5, [1, 1, 1, 1, 1])) // 6
console.log(jumpingFrog(5, [1, 3, 1, 1, 1])) // 4
console.log(jumpingFrog(5, [1, 1, 0, 1, 1])) // no chance :-(
