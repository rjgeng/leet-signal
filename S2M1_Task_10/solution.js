function solution(digits) {
    let n = digits.length;
    digits[n-1] += 1;
    let carry = parseInt(digits[n-1]/10);
    digits[n-1] = digits[n-1] % 10;
    for (let i = n - 2; i >= 0; i--) {
        if (carry == 1) {
            digits[i] += 1;
            carry = parseInt(digits[i] / 10);
            digits[i] = digits[i] % 10;
        }        
    }
    if (carry == 1)
        digits.unshift(1);
    return digits;
}