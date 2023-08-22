function LongestValidParenthese(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" && s[i+1] === ")"){
            count += 2
        }
    }
    return count
}




console.log(LongestValidParenthese("(()")) // 2
console.log(LongestValidParenthese(")()())")) // 4
console.log(LongestValidParenthese("()))))(()())(")) // 6