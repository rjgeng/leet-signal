function solution(s) {
    return s === reverse_str(s);
}

function reverse_str(s) {
    let result = '';
    for (let i = s.length-1; i >=0; i--)
        result += s[i];
    return result;
}
