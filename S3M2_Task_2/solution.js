function solution(s) {
    if (s.length === 0) return [];
    let arr = s.split(' ');
    const wordsMap = {};
    for (let word of arr){        
        if (word in wordsMap) wordsMap[word] += '#';
        else wordsMap[word] = '#';
    }
        
    let result = [];
        
    for (let key in wordsMap) 
        result.push(`${key}: ${wordsMap[key]}`);    
        
    return result.sort();
    
}
