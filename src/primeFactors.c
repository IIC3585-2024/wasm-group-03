// Basado en https://www.geeksforgeeks.org/c-program-for-efficiently-print-all-prime-factors-of-a-given-number/
#include <stdio.h>
#include <stdlib.h>

int* primeFactors(int n) {
    if (n <= 1) {
        return NULL;
    }

    int initialArraySize = 10;
    int* factors = (int*)malloc(sizeof(int) * initialArraySize);
    int i = 0;

    while (n % 2 == 0) {
        factors[i++] = 2;
        n = n / 2;
    }

    for (int j = 3; j * j <= n; j = j + 2) {
        while (n % j == 0) {
            factors[i++] = j;
            n = n / j;
            if (i >= initialArraySize) {
                initialArraySize *= 2;
                factors = realloc(factors, sizeof(int) * initialArraySize);
            }
        }
    }

    if (n > 2) {
        factors[i++] = n;
    }

    factors = realloc(factors, sizeof(int) * (i + 1));

    return factors;
}