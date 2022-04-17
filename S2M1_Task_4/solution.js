function solution(a, v) {
    let result = 0;
    for (let i = 0; i < a.length; i++){
        if (v === a[i]) result++;  
    }
    return result;
}
