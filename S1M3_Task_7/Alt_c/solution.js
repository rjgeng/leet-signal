function solution(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (letter === s[i]) count++;
    }
    return count;
}
