const getCurrentDate = () => new Date().toLocaleString()
const convertToUpperCase = (text) => text.uppercase()
const convertToMS = (date) => date.getTime()

const firstname = "Juan"
const lastname = "Pardo"

console.log(`Hola ${firstname} ${convertToUpperCase(lastname)}`)
console.log("Fecha", getCurrentDate())
console.log("Current time in milliseconds", convertToMS(new Date()))