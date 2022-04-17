function solution(a, b, c) {
    return  ((a > b) &&
            (b <= c) &&
            (( a*3 > c) ||
            ( c <= a))) ? "OK" : "NOK";
}
