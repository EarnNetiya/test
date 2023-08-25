function frequencySort(str){
    let arr = str.split("")
    let map = []
    let result = ""
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]]++
        }
        else{
            map[arr[i]] = 1
        }
    }
    map.sort((a, b) => b - a)
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i]; j++){
            result += map[i]
        }
    }
    return result
}



console.log((frequencySort("tree"))) // eert
console.log((frequencySort("cccaaa"))) // aaaccc
console.log((frequencySort("Aabb"))) // bbAa


//// xxxxxxxxxxxxxxxxxxxxxxxxx