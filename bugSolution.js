function foo(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(foo(10, 2)); // Output: 2
console.log(foo(10, 3)); // Output: 1
console.log(foo(10, 4)); // Output: 2
console.log(foo(10, 5)); // Output: 5
console.log(foo(10, 6)); // Output: 2
console.log(foo(10, 7)); // Output: 1
console.log(foo(10, 8)); // Output: 2
console.log(foo(10, 9)); // Output: 1
console.log(foo(10, 10)); // Output: 10
console.log(foo(10, 11)); // Output: 1