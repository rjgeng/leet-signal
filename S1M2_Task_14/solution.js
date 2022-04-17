function solution(a, b, c) {
    const arr = [a, b, c];
    let larger = -Infinity;
    for (let x of arr) {
        if ( x > larger) larger = x;
    }
    return larger;
}
