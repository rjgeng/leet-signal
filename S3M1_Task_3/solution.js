function solution(s) {
  // loop through out string and get all the letters
  const wordsMap = {};
  let arr = s.split(' ');
  
  if (s.length === 0) return '';
  
  for (let i = 0; i < arr.length; i++){
      const word = arr[i];
      if (word in wordsMap) wordsMap[word] = 'Hi, just take a seat!';
      else wordsMap[word] = 1;
  }
  
  //  make our empty array to return
  const resultArray = [];
  
  for (let word in wordsMap){
      resultArray.push(word);
  }
  return resultArray.join(" ");
  
}
