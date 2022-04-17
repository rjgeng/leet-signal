function solution(s) {
    let newString = '';
    for (let i = 0; i < s.length; i += 2)        
            newString += s[i];    
    return newString;
}