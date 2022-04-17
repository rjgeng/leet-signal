function solution(s) {
    let result = [];
    let arr = s.split(' ');    
    let el;
    let pos;
    while (arr.length){
        el = arr.shift();        
        pos = arr.indexOf(el);
        
        while (pos >= 0) {
            arr.splice(pos, 1);  
            pos = arr.indexOf(el);  
        } 
        result.push(el);        
        
    }
    return result.join(' ');
    
}
