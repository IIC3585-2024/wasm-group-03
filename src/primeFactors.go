package main

import (
	"math"
)

func PrimeFactors(n int64) []int64 {
	var factors []int64
	var i int64

	for n%2 == 0 {
		factors = append(factors, 2)
		i++
		n /= 2
	}

	var j int64 = 3
	for float64(j)*float64(j) <= float64(n) {
		if n%j == 0 {
			factors = append(factors, j)
			i++
			n /= j
		} else {
			j += 2
		}
	}

	if n > 2 {
		factors = append(factors, n)
	}

	return factors
}
