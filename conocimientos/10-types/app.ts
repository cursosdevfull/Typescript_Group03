type Input = string | number;
type ResultConversion = "result-string" | "result-number";
type Output = string | number;

function combine(
  input1: Input,
  input2: Input,
  resultConversion: ResultConversion
): Output {
  console.log("input2", typeof input2);
  if (
    typeof input1 === "string" &&
    typeof input2 === "string" &&
    resultConversion === "result-string"
  ) {
    return resultConversion + " " + input1 + " " + input2;
  } else if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "result-number"
  ) {
    return resultConversion + " " + (input1 + input2);
  } else {
    throw "Parameters invalid";
  }
}

const combineNames = combine("Ana", "Frank", "result-string");
console.log("combineNames", combineNames);

const combineAges = combine(30, 50, "result-number");
console.log("combineAges", combineAges, typeof combineAges);

const combineOther = combine(30, { name: "Juan" } as any, "result-number");
console.log("combineOther", combineOther);
