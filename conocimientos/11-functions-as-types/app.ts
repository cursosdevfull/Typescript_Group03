function add(a1: number, b1: number): number {
  return a1 + b1;
}

type Operation = (a: number, b: number) => number;

let operation: Operation;
operation = add;

console.log(operation(30, 3));
