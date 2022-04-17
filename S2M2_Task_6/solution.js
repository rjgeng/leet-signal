function solution(a) {
    let numBefore = 1;
    let numCurrent = 1;
    if ( a.length == 0) return 0;
    if (a.length == 1) return 1;
    for (let i = 0; i < a.length -1; i++) {
        if ( a[i] == a[i+1]  ) {
            numCurrent++
        } else if ( numCurrent >= numBefore) {
            numBefore = numCurrent; 
            numCurrent = 1;           
        }
    }
    if (numCurrent >= numBefore) {
        return numCurrent;   
    } else {
        return numBefore;
    }
}