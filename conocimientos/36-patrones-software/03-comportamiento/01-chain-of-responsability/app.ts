import { Authentication, Authorization, Request, Validation } from "./chain-of-responsability"

const request: Request = {
    params: {
        id: 20,
    },
    headers: {
        token: "123456",
        roles: ["admin", "operator", "security"]
    }
}

const authentication = new Authentication(request)
const authorization = new Authorization(request)
const validation = new Validation(request)

authentication.setNextMiddleware(authorization)
authorization.setNextMiddleware(validation)

authentication.execute()