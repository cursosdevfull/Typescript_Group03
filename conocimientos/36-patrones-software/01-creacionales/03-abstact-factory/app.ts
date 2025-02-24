import { getTechnology } from './technology'

const apiRest = getTechnology({ type: "MODERN", technology: "ApiRest" })
const apiGraphql = getTechnology({ type: "MODERN", technology: "ApiGraphql" })
const webservices = getTechnology({ type: "OLD", technology: "Webservices" })
const rpc = getTechnology({ type: "OLD", technology: "Rpc" })

console.log("apiRest", apiRest)
console.log("apiGraphql", apiGraphql)
console.log("webservices", webservices)
console.log("rpc", rpc)