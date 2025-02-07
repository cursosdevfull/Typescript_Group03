//let username: string = "Juan"
let username = "Juan"
/*username = true
username = 10*/
username = "Pedro"

let patientAge: number
let isUserLoggedIn: boolean
patientAge = 20
isUserLoggedIn = true

//let patientList: string[] = ["Juan", "Luis", "Carmen"]
//let patientList: Array<string> = ["Juan", "Luis", "Carmen"]
let patientList = ["Juan", "Luis", "Carmen"]
//patientList.push(true)
patientList.push("Sandra")

let names = ["juan", 20, true]

let bookAppointments: Array<{
    patientId: number,
    scheduleId: number,
    origin: string
}> = [
    {patientId: 10, scheduleId: 50, origin: "intern"},
    {patientId: 20, scheduleId: 60, origin: "app-mobile"}
]

console.log("books", bookAppointments)

