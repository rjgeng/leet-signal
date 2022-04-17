function f(n) {
    let r = 1;
    
    for (let i = 0; i < 5000000; i++)
        r = ((r + n) * n) % 9973;
        
    return r;
}

function solution(nums) {
    let result = [];
    
    let cache = {}; 
    
    for (n of nums) {
        if (!(n in cache))
            cache[n] = f(n);
            
        result.push(cache[n]);
    }
    
    return result;
}


