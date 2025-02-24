type CRUD = {
    create(): void
    read(): void
    update(): void
    delete(): void
}

export class ApiRest implements CRUD {
    create(): void {
        console.log('ApiRest create')
    }
    read(): void {
        console.log('ApiRest read')
    }
    update(): void {
        console.log('ApiRest update')
    }
    delete(): void {
        console.log('ApiRest delete')
    }
}

export class ApiGraphql implements CRUD {
    create(): void {
        console.log('ApiGraphql create')
    }
    read(): void {
        console.log('ApiGraphql read')
    }
    update(): void {
        console.log('ApiGraphql update')
    }
    delete(): void {
        console.log('ApiGraphql delete')
    }
}

export class Webservices implements CRUD {
    create(): void {
        console.log('Webservices create')
    }
    read(): void {
        console.log('Webservices read')
    }
    update(): void {
        console.log('Webservices update')
    }
    delete(): void {
        console.log('Webservices delete')
    }
}

export class Rpc implements CRUD {
    create(): void {
        console.log('Rpc create')
    }
    read(): void {
        console.log('Rpc read')
    }
    update(): void {
        console.log('Rpc update')
    }
    delete(): void {
        console.log('Rpc delete')
    }
}

type Technologies = "ApiRest" | "ApiGraphql" | "Webservices" | "Rpc"
type TechnologyModern = Extract<Technologies, "ApiRest" | "ApiGraphql">
type TechnologyOld = Exclude<Technologies, TechnologyModern>

type Technology =
    | { type: "MODERN"; technology: TechnologyModern }
    | { type: "OLD"; technology: TechnologyOld }

export function getTechnology(tecnology: Technology): CRUD {
    switch (tecnology.type) {
        case "MODERN":
            switch (tecnology.technology) {
                case "ApiRest":
                    return new ApiRest()
                case "ApiGraphql":
                    return new ApiGraphql()
            }
        case "OLD":
            switch (tecnology.technology) {
                case "Webservices":
                    return new Webservices()
                case "Rpc":
                    return new Rpc()
            }
        default:
            throw new Error("Technology not found")
    }
}