function solution(p) {    
    let l = Math.sqrt((p[0][0] - p[1][0])**2 + (p[0][1]-p[1][1])**2)
    for (let i = 0; i < p.length; i++) {
        for (let j = i+1; j < p.length; j++) {
            if (l > Math.sqrt((p[i][0] - p[j][0])**2 + (p[i][1]-p[j][1])**2))  {
                l  = Math.sqrt((p[i][0] - p[j][0])**2 + (p[i][1]-p[j][1])**2);    
            }  
        }
    }
    return l;
}
