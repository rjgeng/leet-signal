function solution(s) {
    let result = [];    
    let arr = s.split(' ');        
    if (s.length === 0) return '';
        for (let i = 0; i < arr.length ; i++){
        let arrOp = [...arr];
        let [ el ] = arrOp.splice(i, 1);                     
        pos = arrOp.indexOf(el);
        let count = 1;
        while (pos >= 0) {
            arrOp.splice(pos, 1);  
            pos = arrOp.indexOf(el); 
            count++ 
        } 
        result.push(el+`(${count})`);                     
    }
    return result.join(' ');    
}


