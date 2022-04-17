function solution(n, m) {
    let result = [];
    let As = "A".repeat(m);
    
    for (let i = 0; i < n; i++){
        result.push(As);        
    }
    return result;
}
