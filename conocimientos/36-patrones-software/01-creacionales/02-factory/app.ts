import { selectDestination } from "./upload"

const file = new File(["content"], "file.txt", { type: "text/plain" })
const upload = selectDestination('AWS')
upload.save(file)