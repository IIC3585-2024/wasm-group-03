use std::vec::Vec;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn primeFactors(n: u32) -> Vec<u32> {
    let mut factors = Vec::new();
    let mut i = 0;

    let mut n = n;

    while n % 2 == 0 {
        factors.push(2);
        i += 1;
        n /= 2;
    }

    let mut j = 3;
    while j * j <= n {
        if n % j == 0 {
            factors.push(j);
            i += 1;
            n /= j;
        } else {
            j += 2;
        }
    }

    if n > 2 {
        factors.push(n);
    }

    factors
}