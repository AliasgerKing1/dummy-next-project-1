import { users } from "@/util/db";
import { NextResponse } from "next/server";

export let GET = async () => {
  let data = users;
  return NextResponse.json(data, { status: 200 });
};
export let POST = async (request) => {
  let payload = await request.json();
  return NextResponse.json({ payload }, { status: 201 });
};
