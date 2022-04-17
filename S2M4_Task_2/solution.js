function solution(a, window_size) {
    let result = [];    
    for (let i = 0; i < a.length - window_size + 1; i++){
        let flag = true;
        for (let j = i; j < window_size+i; j++) {
            (a[j]%2 != 0 ) ? flag &= true : flag &= false;   
        } 
        flag ?  result.push(true) : result.push(false);
    }    
    return result;
}
