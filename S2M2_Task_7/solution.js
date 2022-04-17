function solution(inputString) {
    let result = "";
    let repeatNum = 1
    for (let i = 0; i < inputString.length; i++) {
        if ( inputString[i] == inputString[i+1]) {
            repeatNum++;
        } else {
            result += repeatNum + inputString[i]
            repeatNum = 1;
        }
    }
    return result;
}