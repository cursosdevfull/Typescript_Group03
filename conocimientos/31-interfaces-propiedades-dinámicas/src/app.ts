interface IError {
  [key: string]: string | number
}

const error1: IError = {
  message : "An error ocurred at line 86",
  code: 404,
  students: 120
}

