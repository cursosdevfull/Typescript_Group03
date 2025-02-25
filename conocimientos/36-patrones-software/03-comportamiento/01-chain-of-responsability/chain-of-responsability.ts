export type Request = {
    params: {
        id: number;
    },
    headers: {
        token: string;
        roles: string[];
    }
}

export abstract class Middleware {
    protected middleware: Middleware | undefined
    protected request: Request

    constructor(request: Request) {
        this.request = request
    }

    setNextMiddleware(middleware: Middleware) {
        this.middleware = middleware
    }

    abstract handlerRequest(request: Request): void

    abstract execute(): void
}

export class Authentication extends Middleware {
    constructor(request: Request) {
        super(request)
    }

    handlerRequest(request: Request): void {
        if (!request.headers.token) {
            throw new Error('Token is required')
        }

        console.log("Token is present")
    }

    execute(): void {
        this.handlerRequest(this.request)

        const token = this.request.headers.token

        if (token === "123456") {
            console.log('Authentication success')
        } else {
            throw new Error("Authentication failed");
        }

        if (this.middleware) {
            this.middleware.execute()
        }
    }
}

export class Authorization extends Middleware {
    constructor(request: Request) {
        super(request)
    }

    handlerRequest(request: Request): void {
        if (!request.headers.roles && (request.headers.roles as string[]).length === 0) {
            throw new Error('Roles is required')
        }

        console.log("Roles are present")
    }

    execute(): void {
        this.handlerRequest(this.request)

        const roles = this.request.headers.roles
        const rolesAllowed = ['admin', 'user']

        const isAllowed = roles.some(role => rolesAllowed.includes(role))

        if (isAllowed) {
            console.log('Authorization success')
        } else {
            throw new Error('Authorization failed')
        }

        if (this.middleware) {
            this.middleware.execute()
        }
    }
}

export class Validation extends Middleware {
    constructor(request: Request) {
        super(request)
    }

    handlerRequest(request: Request): void {
        if (!request.params.id) {
            throw new Error('Id is required')
        }

        if (request.params.id <= 0) {
            throw new Error('Id must be greater than 0')
        }

        console.log("Parameters are valid")
    }
    execute(): void {
        this.handlerRequest(this.request)

        if (this.middleware) {
            this.middleware.execute()
        }
    }

}