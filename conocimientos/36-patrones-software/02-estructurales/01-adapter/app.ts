import { Adapter, IHttp, IParametersRequest } from "./adapter";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

type Geo = {
    lat: string;
    lng: string;
}

type Company = {
    name: string;
    catchPhrase: string;
    bs: string;
}



export class ServiceHttp<T> {
    constructor(private readonly adapter: IHttp<T>) { }

    async getUsers() {
        const params: IParametersRequest = {
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET",
        }

        return this.adapter.request(params)
    }
}

const adapter = new Adapter<User>();
const service = new ServiceHttp(adapter);
service.getUsers().then(console.log).catch(console.error);