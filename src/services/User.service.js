import axios from "axios"
let apiUrl = "http://localhost:3000/api/"

let getUsers = async () => {
let {data} = await axios.get(`${apiUrl}user`) 
return data
}

let getCurrentUser = async (userId) => {
let {data} = await axios.get(`${apiUrl}user/${userId}`) 
return data
}

let addUser = async (request_data) => {
    let response = await axios.post(`${apiUrl}user`, request_data) 
    return response
}

let updateUser = async (id, request_data) => {
    let response = await axios.put(`${apiUrl}user/${id}`, request_data) 
    return response
}
let deleteUser = async (id) => {
    let response = await axios.delete(`${apiUrl}user/${id}`) 
    return response
}

export {getUsers, getCurrentUser, addUser, updateUser, deleteUser}