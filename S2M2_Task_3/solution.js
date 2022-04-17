function solution(a) {
    let i = 0;
    let result = false;
    if ( a.length == 0 || a.length ==1) {
        result = true;
    }else {
        while (i*2 < a.length-1){
            if(a[i] == a[a.length-1 - i]){
                result = true;
                i++;
            }
            break;                
        }         
    }
    return result;
}  