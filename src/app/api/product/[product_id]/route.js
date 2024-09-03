import { Product } from "@/model/product";
import { NextResponse } from "next/server";

export let PUT = async (request, {params : {product_id}}) => {
let payload = await request.json();
let filter = {_id : product_id}
const response = await Product.findOneAndUpdate(filter, payload, { new: true })
return NextResponse.json({message : "PUT called", data : response}, {status : 200})
}

// headers: {
//     'Cache-Control': 'no-cache'
// }

// and use useRouter for reload the page