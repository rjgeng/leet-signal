function solution(a, x) {
    let result = [];
    for (let i = 0; i < a.length; i++){
        if (x != a[i]) result.push(a[i])
    }
    return result;
}
