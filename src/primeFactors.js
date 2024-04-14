export default async function primeFactors(n) {
    let factors = []
    let i = 0;

    while (n % 2 === 0) {
        factors[i++] = 2;
        n = n / 2;
    }

    for (let j = 3; j * j <= n; j = j + 2) {
        while (n % j === 0) {
            factors[i++] = j;
            n = n / j;
        }
    }

    if (n > 2) {
        factors[i++] = n;
    }
    
    return factors;
}
