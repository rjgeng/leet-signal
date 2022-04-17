function solution(a, b, c, d, e, f) {
    const arr = [a, b, c, d, e, f];
    let largest = -Infinity;
    for (let x of arr){
        if ( x > largest) largest = x;
    }   
    return largest;
}
