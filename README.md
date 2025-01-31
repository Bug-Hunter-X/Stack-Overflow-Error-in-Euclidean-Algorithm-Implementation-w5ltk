# Stack Overflow Error in Euclidean Algorithm

This repository demonstrates a potential stack overflow error in a JavaScript implementation of the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers.  The original code is prone to exceeding the call stack limit for certain input pairs, particularly when one number is significantly larger than the other.  A corrected version is also provided, mitigating the stack overflow vulnerability.

## Bug Description
The `foo` function recursively calls itself, and for inputs where the difference between `a` and `b` is very large or if there's no GCD (other than 1), it results in a deep recursion, exceeding the JavaScript engine's call stack limit, thus throwing a stack overflow error.

## Solution
The solution uses an iterative approach to compute the GCD, avoiding excessive recursion and preventing stack overflow errors.