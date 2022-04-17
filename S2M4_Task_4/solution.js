function solution(a) {
    let count = 0;
    let arr = [...a]
    arr.unshift(0);
    arr.push(0);
    for (let i = 1; i < arr.length-1; i++){
        if (arr[i] == (arr[i-1]+arr[i+1])/2)  count++  
    }
    return count;
}
