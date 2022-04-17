function solution(elements) {
    if (isInOrder(elements)) return 0;
    for (let i = 0; i < elements.length; i++){
        elements.push(elements.shift());
        if (isInOrder(elements)) return i+1
    } 
    return -1;
}

function isInOrder(arr) {
    for (let j = 0; j < arr.length-1; j++){
        const current = arr[j];
        const next = arr[j+1];
        if (current >= next) return false;
    } 
    return true;       
}
