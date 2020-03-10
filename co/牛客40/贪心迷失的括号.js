function MissingBrackets( brackets ) {
    let res = brackets.replace(/[?]/,'(')
    if(isValid(res)){
        return res
    }else{
        return brackets.replace(/[?]/,')')
    }
}
console.log(MissingBrackets("()?)"))
function isValid (s) {
    let map = {
        '(':-1,
        ')':1,
        '{':-2,
        '}':2,
        '[':-3,
        ']':3
    }
    let stack = [] 
    for(let i=0;i < s.length;i++){ 
        if(map[s[i]] < 0){ 
            stack.push(s[i]) 
        }else { 
            let last = stack.pop() 
            if(map[last] + map[s[i]] != 0){ 
                return false
            }
        }
    }
    if(stack.length > 0) return false 
    return true 
};