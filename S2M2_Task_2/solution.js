function solution(n) {
    let result = '';
    let string_n = String(n);
    console.log('string_n:', string_n)
    for (let i = string_n.length-1; i >=0; i--){
        result += string_n[i]
        console.log('result:', result)
    }
    return Number(result);    
}
