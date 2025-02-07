function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
   /*  if(typeof num1 
        !== "number" || typeof num2 !== "number" || showResult !== "string" || phrase !== "string") {
            throw new Error("Incorrect input");
            
        } */

    const result = num1 + num2
    if(showResult) {
        console.log(phrase, result)
    } else {
        console.log(result)
    }
}

const num1 = 20
const num2 = 35
const printResult = true
const resultPhrase = "Result is"

sum(num1, num2, printResult, resultPhrase)