#include <vector>
#include <cmath>

std::vector<int> primeFactors(int n) {
    std::vector<int> factors;
    int i = 0;

    while (n % 2 == 0) {
        factors.push_back(2);
        i++;
        n /= 2;
    }

    for (int j = 3; j * j <= n; j += 2) {
        while (n % j == 0) {
            factors.push_back(j);
            i++;
            n /= j;
        }
    }

    if (n > 2) {
        factors.push_back(n);
    }

    return factors;
}
