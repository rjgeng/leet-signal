function solution(s) {
    let result = '';
    let resultArr = [];
    let arr = s.split(' ');
       
    if (s.length === 0) return '';
    for (let i =arr.length-1; i >=0 ; i--){
        let arrTarget = [...arr]; 
        arrTarget.splice(i, 1);
        let count = 1;
        for (let j = arrTarget.length -1; j >= 0; j--){
            if (arr[i] == arrTarget[j]) count++
        }         
        resultArr.unshift(arr[i]+`(${count})`);
                     
    }
       
    return resultArr.join(" ");
    
}

