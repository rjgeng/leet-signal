function solution(p, n, m) {
    let result = "";
    let As = Array(n).fill('A').join('');    
    let Bs = Array(m).fill('B').join('');    
    let Xs = Array(p).fill('X').join('');    
    
    for (let i = 0; i < p; i++) {
        i % 3 === 0 ?  result += Xs:  result += As + Bs;
    }
    return result;
}