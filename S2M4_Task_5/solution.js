function solution(s, x) {
    let result = -1
    
    for (let i = 0; i <= s.length - x.length; i++) {        
        if (s[i] === x[0]) {
            let flag = true;            
            for (let j = 1; j < x.length; j++){
                s[i+j] === x[j] ? flag &= true : flag &= false;   
            } 
            if (flag) return i;
        } 
                  
    }
    return result;
}
