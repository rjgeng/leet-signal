function solution(n) {
    if (n === 0) return 1;
    if (n === 1) return 1;    
    return solution(n-1) * n;
}
