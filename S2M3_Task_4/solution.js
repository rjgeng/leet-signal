function solution(s, a, b) {
    let result = '';
     
    if ( a < 0) a = 0;
    if ( b > s.length) b = s.length;
    if (b <= a ) return result;
    for (let i = a; i < b; i++){
        result +=s[i];
    }
    return result;
}
