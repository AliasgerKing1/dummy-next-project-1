import { Product } from "@/model/product"
import { NextResponse } from "next/server"
export let GET = async () => {
    let response = await Product.find({})
    return NextResponse.json({message : "GET called", data : response[0]}, {status : 200})
}

export let POST = async (request) => {
    let payload = await request.json()
    let response = await Product.create(payload)
    return NextResponse.json({message : "POST called", data : response}, {status : 201})
}
