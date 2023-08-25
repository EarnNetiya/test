function frequencySort(str){
   let str1 = str.split('')
   let arr = [];
   let arr1 = [];
   let sorted = str1.sort((a,b) => a-b)
   for (let i = 0; i < sorted.length; i++){
         if(sorted[i] === sorted[i+1]){
              arr.push(sorted[i],sorted[i+1])

         }
         else{
            arr1.push(sorted[i])
            
         }

    }

    return result = arr.concat(arr1).join('')
}



console.log((frequencySort("tree"))) // eert
console.log((frequencySort("cccaaa"))) // aaaccc
console.log((frequencySort("Aabb"))) // bbAa


//// xxxxxxxxxxxxxxxxxxxxxxxxx