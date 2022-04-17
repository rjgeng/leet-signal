function solution(row_count, col_count) {
    let result = []
    // creating two dimensional array
    for (let i = 0; i < row_count; i++) {
        for (let j = 0; j < col_count; j++){
            result[i] = [];    
        }
    }
    // inserting elements to array
    for (let i = 0; i < row_count; i++) {
        for (let j = 0; j < col_count; j++){
            result[i][j] = 0;    
        }
    }
    return result;
}
