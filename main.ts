function addNumbers(a: number, b: number): number {
  return a + b;
}

let fruits: Array<string> = ["apple", "orange", "banana"];

for (let index in fruits) {
  console.log(fruits[index]);
}

console.log(addNumbers(3, 4));
