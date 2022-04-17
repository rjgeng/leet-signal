function solution(s) {
    // loop through out string and get a count of all the letters
    const lettersMap = {};
    let arr = s.split(' ');
    
    if (s.length === 0) return '';
    
    for (let i = 0; i < arr.length; i++){
        const letter = arr[i];
        if (letter in lettersMap) lettersMap[letter]++;
        else lettersMap[letter] = 1;
    }
    
    //  make our empty array to return
    const letterCountArray = [];
    
    // we loop through the letters to find, 
    // get the count for that letter from our maps, 
    // and push it into the array to return
    for (let i = 0; i < arr.length; i++){
        const letter = arr[i];
        const count = lettersMap[letter] | 0;
        letterCountArray.push(arr[i]+`(${count})`);
    }
    return letterCountArray.join(" ");
}