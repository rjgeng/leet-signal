function solution(a, v) {
    for (let i = 0; i < a.length; i++){
        if (v === a[i]) return true;
    }
    return false;
}
