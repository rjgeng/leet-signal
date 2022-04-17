function solution(p, n, m) {
    let result = "";
    let As = Array(n).fill('A').join('');    
    let Bs = Array(m).fill('B').join('');    
        
    return Array(p).fill(As+Bs).join('');
}
