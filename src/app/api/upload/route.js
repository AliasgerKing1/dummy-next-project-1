import { NextResponse } from "next/server";
import {writeFile} from "fs/promises"

export let POST = async (request) => {
try {
    const payload = await request.formData();
    const file = payload.get('file');
    
    if (!file) {
        return NextResponse.json({ message: "File not found." }, { status: 404 });
    } else {
        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/${file.name}`
        await writeFile(path, buffer)
    return NextResponse.json({ message: "File uploaded successfully." }, { status: 200 });
    }

} catch (error) {
    return NextResponse.json({ message: "Internal Server Error"}, { status: 500 });
};
}