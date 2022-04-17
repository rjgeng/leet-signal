function solution(a) {
    let result = [];
    for (let i = 1; i <a.length; i++){
        result.push(a[i-1]-a[i]);    
    }
    return result;
}
