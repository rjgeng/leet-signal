function solution(a, x) {
    let result = [...a]
    for (let i = result.length; i >= 0; i--) {
        if ( result[i] === x) {
            result.splice(i, 1); 
            console.log(i, result);
        }          
    }
    return result;
}
