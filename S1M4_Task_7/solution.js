function solution(a) {
    let arr = []
    arr.push(a.shift());
    arr.push(a.pop());
    let result = []
    result.push(a);
    result.push(arr);
    return result;
}
