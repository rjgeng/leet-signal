function solution(n, width) {    
    return width > (String(n).length) ?
        Array(width-(String(n).length)).fill('0').join('') + n: ''+n;
}
