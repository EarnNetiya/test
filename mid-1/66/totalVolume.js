function totalVolume(...boxes){
    let total = 0;
    for (let i = 0; i < boxes.length; i++) {
        let volume = 1;
        for (let j = 0; j < boxes[i].length; j++) {
            volume *= boxes[i][j];
        }
        total += volume;
    }
    return total;
}
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalVolume([2,2,2],[2,1,1]))
console.log(totalVolume([1,1,1]))


//// xxxxxxxxxxxxxxx