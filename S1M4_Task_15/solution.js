function solution(s) {
    let newString = '';
    for (let i = 0; i < s.length; i += 2){
        if (notVowelOrCaptialLetter(s[i]))
            newString += s[i];
    }
    return newString;
}
 
function notVowelOrCaptialLetter (char){
    if (char === char.toUpperCase()) return false;
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') return false;
    return true;
}