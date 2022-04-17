function solution(current) {
    let count = current;
    while (count < 999999) {
        if ( isPalindrome (count) ) {
            console.log(count);
            return Array(6 - String(count).length).fill('0').join('') + String(count)
        } 
        count++;      
           
    }  
    return "000000"; 
}

function isPalindrome (n) {
    let nStr = String(n);
    nStr = Array(6 - String(n).length).fill('0').join('') + nStr;
    return nStr === reserveStr(nStr);
}

function reserveStr (s) {
    let result = '';
    for (let i = s.length-1; i >=0; i--){
        result += s[i];    
    }
    result += Array(6 - result.length).fill('0').join('');
    
    return result;
}