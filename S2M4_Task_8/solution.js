function solution(s) {
    let result = [];
    let str = s[0];
    for (let i = 1; i < s.length; i++){
        if ( s[i-1].charCodeAt(0) <= 90 && s[i].charCodeAt(0) <= 90){
            if ( s[i-1] < s[i] )  {
                    str += s[i];    
                } else {
                    result.push(str);
                    str = s[i];
                } 
        } else if (s[i-1].charCodeAt(0) <= 90 && s[i].charCodeAt(0) > 90) {
            result.push(str);
            str = s[i];
        } else if (s[i-1].charCodeAt(0) > 90 && s[i].charCodeAt(0) > 90) {
            if ( s[i-1] < s[i] ) {
                    str += s[i];    
                } else {
                    result.push(str);
                    str = s[i];
                }             
        }
        
    }
    return result;