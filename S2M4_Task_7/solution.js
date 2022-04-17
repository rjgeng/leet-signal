function solution(a) {
    let result = 0;
    for (let i = 1; i < a.length-1; i++){
        let count = 0;
        if (a[i-1] == a[i]) count++;
        if (a[i] == a[i+1]) count++;
        if (a[i+1] == a[i-1]) count++;
        if (count == 1) result++;        
    }
    return result;

}