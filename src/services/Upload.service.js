import axios from "axios"
let apiUrl = "http://localhost:3000/api/"

let uploadFile = async (request_data) => {
    return await axios.post(`${apiUrl}/upload`, request_data)
}

export {uploadFile}