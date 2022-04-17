function solution(a) {
    let count = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[0] === a[i]) {
            count++
        } else {
            return count;
        }        
    }
    return count;
}
