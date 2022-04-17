function solution(a, start, end) {
    let result = [...a];
    if ( end <= start) {
        return [];
    }
    if (end > a.length -1 ) {
        end = a.length; 
        result = a.slice(start)       
    } 
    if ( start > a.length -1 ) {
        start = 0;
    }
        
    for (let i = start; i < end ; i++) {
        result = a.slice(start, end)
    }
    
    return result;
}