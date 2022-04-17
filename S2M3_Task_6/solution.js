function solution(n) {
    let result = []
    // creating two dimensional array
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++){
            result[i] = [];    
        }
    }
    // inserting elements to array
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++){
            result[i][j] = (i+1)*(j+1);    
        }
    }
    return result;

}
