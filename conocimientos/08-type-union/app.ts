//function combine(input1: unknown, input2: unknown) {
function combine(input1: string | number, input2: string | number) {
  //return input1 + input2
  //return (input1 as string) + (input2 as string);
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1 + " " + input2;
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return `Result = ${input1 + input2}`;
  } else {
    throw "Parameters invalid";
  }
}

const combine1 = combine("Max", "Ana");
console.log("combine1", combine1);

const combine2 = combine(10, 30);
console.log("combine2", combine2);

const combine3 = combine(10, "30");
console.log("combine3", combine3);

/*const combine4 = combine(10, true);
console.log("combine4", combine4);*/
