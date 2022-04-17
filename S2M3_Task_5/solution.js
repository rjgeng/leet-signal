function solution(n) {
    let digits = 0;
    if (n == 0) return 1;
    while ( n >= 1){
        n /= 10;
        digits++;
        console.log(n, digits);
    }
    return digits;
}
