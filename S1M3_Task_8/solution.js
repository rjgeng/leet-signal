function solution(n) {
    let count = 1;
    while ( n/10 > 1) {
        count++;
        n /= 10;    
    }
    return count;
}
