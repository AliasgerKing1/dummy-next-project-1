import { users } from "@/util/db";
import { NextResponse } from "next/server";

export let GET = async (request, { params: { id } }) => {
  // Check if the id is valid (convert to number and check if it is a positive integer)
  if (isNaN(Number(id)) || Number(id) <= 0) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  // Find the user by ID
  let userData = users.find((user) => user.id === Number(id));

  // Check if the user was found
  if (!userData) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Return the user data
  return NextResponse.json(userData, { status: 200 });
};

export let PUT = async (request, { params: { id } }) => {
  let payload = await request.json();
  // Check if the id is valid (convert to number and check if it is a positive integer)
  if (isNaN(Number(id)) || Number(id) <= 0) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }
  payload.id = Number(id);
  return NextResponse.json(payload, { status: 200 });
};

export let DELETE = (request, { params: { id } }) => {
  if (id) {
    return NextResponse.json(
      { data: "User Deleted Successfully", id },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { data: "Internal Server Error" },
      { status: 400 }
    );
  }
};
