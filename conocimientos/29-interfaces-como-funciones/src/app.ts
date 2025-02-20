interface OperationFn {
  (operator1: number, operator2: number, operationType: string): number
}

const sum: OperationFn = (a: number, b: number, operation: string) => {
    if(operation === "sum") {
      return a + b
    }

    return a -b
}

console.log(sum(1, 2, "sum"))