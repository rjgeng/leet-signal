function solution(a, b) {
    let result = a;
    for (let i = 1; i <= b-a ; i++){
        result *= a+i;  
    }
    return result;    
}
