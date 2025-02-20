type VerbsSpecial = "GET" | "POST" | "PUT" | "DELETE"
type WithBodySpecial = Extract<VerbsSpecial, "POST" | "PUT">
//   ^?

const withBodySpecial: WithBodySpecial = "POST"