function solution(s) {
    let highest = s[0];
    for (let i = 1; i < s.length; i++){
        if (s[i].charCodeAt(0) > highest.charCodeAt(0))  highest = s[i]  
    }
    return highest;
}
