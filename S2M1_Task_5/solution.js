function solution(a, b) {
    let result = false;
    if ( a.length === b.length) {
        if (a.length === 0) {
            result = true;
        } else {
            for (let i = 0; i < a.length; i++){
                a[i] === b[i] ? result = true: false;
            }
        }
    } else {
        result = false;
    }
    return result;
}
