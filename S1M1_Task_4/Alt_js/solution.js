// function solution(n) {
//     let result = 1;
//     let cache = {};      
    
//     for ( i of n) {
//         if (!(i in cache))
//             cache[i] = f(i);
//         result = cache[i];
//     }
//     return result;   
    
// }

// function f(n) {
//     if ( n == 1) return 1;
//     return f(n-1) + n;
// }

// function f(n) {
//     let r = 1;
    
//     for (let i = 0; i < 5000000; i++)
//         r = ((r + n) * n) % 9973;
        
//     return r;
// }

// function solution(nums) {
//     let result = [];
    
//     let cache = {}; 
    
//     for (n of nums) {
//         if (!(n in cache))
//             cache[n] = f(n);
            
//         result.push(cache[n]);
//     }
    
//     return result;
// }