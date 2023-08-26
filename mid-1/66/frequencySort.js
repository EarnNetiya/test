function frequencySort(str){
   let arr = [];
   let arr1 = [];
   let sorted = str.split('').sort();
   for (let i = 0; i < sorted.length; i++){
         if(sorted[i] === sorted[i+1]){
              arr.push(sorted[i])

         }
         else{
             arr1.push(sorted[i])
         }

    }

    return arr.concat(arr1).join('')
}



console.log((frequencySort("tree"))) // eert
console.log((frequencySort("cccaaa"))) // aaaccc
console.log((frequencySort("Aabb"))) // bbAa


