function solution(s) {
    let result = '_';    
    let temp = s.slice(1);
    if (!isInclued (temp, s[0])) return s[0]; 
    for (let i = 1; i < s.length; i++) { 
        temp = s.slice(0, i) + s.slice(i+1); 
        if (!isInclued (temp, s[i])) return s[i];               
    }
    return result;
}

function isInclued (s, x) {
    flag = true;
    for (let i = 0; i < s.length; i++){
        if ( s[i] == x) {
            return true;
        } else {
            flag &= true;
        }    
    }
    if (flag) return false;
}
