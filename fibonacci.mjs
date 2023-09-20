function fibonacci1(n) {
    if (n == 0 || n == 1) return n;
    return fibonacci1(n - 2) + fibonacci1(n - 1);
}

function fibonacci2(n, memo) {
    if (n == 0 || n == 1) return n;

    if (memo[n] == null) {
        memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
    }

    return memo[n];
}

console.log(fibonacci1(5));
console.log(fibonacci2(5,{}));