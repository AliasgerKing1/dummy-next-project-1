"use client"

import { uploadFile } from "@/services/Upload.service"
import { useState } from "react"

const Upload = () => {
    let [file, setFile] = useState(null);
    let handleSubmit = async (e) => {
e.preventDefault();
const data = new FormData();
data.set("file", file);
let response = await uploadFile(data);
if(response.status === 200) {
    alert("file uploaded successfully")
}
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <input type="file" name="file" onChange={(e)=> setFile(e.target.files?.[0])} />
    <button type="submit">Upload</button>
    </form>
    </>
  )
}

export default Upload