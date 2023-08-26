function canMove(piece, fromPosition, toPosition) {
    
    const fromX = fromPosition[0].charCodeAt(0) - 65;
    const fromY = 8 - parseInt(fromPosition[1]);

    const toX = toPosition[0].charCodeAt(0) - 65;
    const toY = 8 - parseInt(toPosition[1]);

    const dx = fromX - toX;
    const dy = fromY - toY;

    if (piece === "Rook") {
        return dx === 0 || dy === 0;
    } else if (piece === "Bishop") {
        return dx === dy || dx === -dy;
    } else if (piece === "Queen") {
        return dx === 0 || dy === 0 || dx === dy || dx === -dy;
    }

    return false;
   
}


console.log(canMove("Rook", "A8", "H8"))// true
console.log(canMove("Bishop", "A7", "G1"))// true
console.log(canMove("Queen", "C4", "D6"))// false