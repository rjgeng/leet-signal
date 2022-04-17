function solution(s, letters) {
    let result = [];
    
    for (let i = 0; i < letters.length; i++){
        let count = 0;
        for (let j = 0; j < s.length; j++){
            if (letters[i] === s[j] ) count++;
        }
        result.push(count);        
    } 
    return result;
}

