function solution(a, window_size) {
    let result = [];
    
    for (let i = 0; i < a.length - window_size + 1; i++){
        let avg = 0;
        for (let j = i; j < window_size+i; j++) {
            avg += a[j];           
        } 
        result.push(avg/window_size);
    }
    
    return result;
}
