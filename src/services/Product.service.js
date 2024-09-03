import axios from "axios"
let apiUrl = "http://localhost:3000/api/"

let addProduct = async (request_data) => {
return await axios.post(`${apiUrl}product`, request_data)
}

export {addProduct}