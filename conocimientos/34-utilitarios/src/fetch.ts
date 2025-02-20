type HttpVerbs = "GET" | "POST" | "PUT" | "DELETE"

type HttpVerbsWithBody = Extract<HttpVerbs, "POST" | "PUT">
type HttpVerbsWithoutBody = Exclude<HttpVerbs, HttpVerbsWithBody>

type MethodBodyCombination =
    | { method: HttpVerbsWithBody, body: RequestInit["body"] }
    | { method: HttpVerbsWithoutBody, body: never }

type PreparedHeaders = {
    "Content-Type": TMimetypes,
    "x-api-key": string
}

type TMimetypes = "application/json" | "application/pdf" | "application/xml"

type THeaders = RequestInit["headers"] & Partial<PreparedHeaders>

type TRequestInit = RequestInit & MethodBodyCombination & { headers: THeaders }
//   ^?


declare function fetch<T = null>(input: RequestInfo | URL, init?: TRequestInit): Promise<TResponse<T>>

interface TResponse<T> extends Response {
    json(): Promise<T>
}

type SystemPhoto = {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

fetch<SystemPhoto[]>('https://jsonplaceholder.typicode.com/photos', {
    method: "POST",
    body: JSON.stringify({ name: "John" }),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
        Authorization: "Bearer 123"
    }
})
    .then(response => response.json())
    .then(data => console.log(data));