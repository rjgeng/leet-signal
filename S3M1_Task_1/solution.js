function solution(s, letters) {
    // loop through out string and get a count of all the letters
    const charsMap = {};
    for (let i = 0; i < s.length; i++){
        const char = s[i];
        if (char in charsMap) charsMap[char]++;
        else charsMap[char] = 1;
    }
    
    //  make our empty array to return
    const letterCountArray = [];
    
    // we loop through the letters to find, get the count for that letter from our maps, and push it into the array to return
    for (let i = 0; i < letters.length; i++){
        const letter = letters[i];
        const currentCount = charsMap[letter] | 0;
        letterCountArray.push(currentCount);
    }
    return letterCountArray;
}
