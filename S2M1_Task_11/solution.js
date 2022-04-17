function solution(a, b) {
    let result = "";
    let sum = 0;
    let i = a.length-1, j = b.length-1;
    while (i >= 0 || j >= 0 || sum == 1) {
        sum += ((i >= 0)? a.charAt(i).charCodeAt(0) - '0'.charCodeAt(0): 0);
        sum += ((j >= 0)? b.charAt(j).charCodeAt(0) - '0'.charCodeAt(0): 0);  
        
        result = String.fromCharCode(parseInt(sum % 2) + '0'.charCodeAt(0)) + result;  
        
        sum = parseInt(sum/2);
        
        i--; j--;    
    }
    return result;
}