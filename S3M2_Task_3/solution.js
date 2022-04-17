function solution(n) {
  const cache = {};
  return fib(n, cache);
}

function fib (n, cache) {
  if ( n === 0 ) return 0;
  if ( n === 1 ) return 1;
  let result;
  if ( n in cache ) result = cache[n];
  else result = fib(n-1, cache) + fib(n - 2, cache);
  cache[n] = result;
  return result;
}