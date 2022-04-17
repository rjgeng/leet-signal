function solution(s) {
    let newString = '';
    for (let i = 0; i < s.length; i += 2){
        if (notVowelLetter(s[i]))
            newString += s[i];
    }
    return newString;
}
 
function notVowelLetter (char){    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') return false;
    return true;
}