function solution(size) {
    let arr = [];

    // creating two dimensional array
    for (let i = 0; i< size; i++) {
        for(let j = 0; j< size; j++) {
            arr[i] = [];
        }
    }
    
    // inserting elements to array
    for (let i = 0; i< size; i++) {
        for(let j = 0; j< size; j++) {
            i === j ? arr[i][j] = 1: arr[i][j] = 0;
        }
    }
    return arr;    

}
