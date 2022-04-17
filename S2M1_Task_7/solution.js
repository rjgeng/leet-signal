function solution(a, filter_list) {
    let result =[...a];    
    for (i = result.length-1; i >= 0; i--) {
        for (let j = 0; j < filter_list.length; j++){
            if(result[i] === filter_list[j]){
                result.splice(i, 1)                      
            }            
        }                     
    }    
    
    return result;
}
