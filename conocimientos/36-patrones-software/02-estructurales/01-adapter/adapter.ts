import axios from "axios";

export type IMethod = "GET" | "POST" | "PUT" | "DELETE";
export type IMethodWithBody = Exclude<IMethod, "GET" | "DELETE">;
export type IMethodWithoutBody = Exclude<IMethod, "POST" | "PUT">;

export type IParametersRequest =
    | {
        url: string;
        method: IMethodWithBody;
        body: Record<string, string | number | object | string[] | number[] | object[]>;
    }
    | { url: string, method: IMethodWithoutBody, body?: never };

export type IHttp<T> = {
    request(params: IParametersRequest): Promise<T>;
}

export class Adapter<U> implements IHttp<U> {
    async request(params: IParametersRequest): Promise<U> {
        const { url, method, body } = params;

        return fetch(url, {
            method,
            body: JSON.stringify(body),
        }).then(response => response.json())

        /*         const response = await axios({
                    method,
                    url,
                    data: body
                });
        
                return response.data; */
    }

}