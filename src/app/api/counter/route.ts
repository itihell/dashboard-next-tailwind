import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  return NextResponse.json({ methods: "GET", hello: "world  - GET" });
}

export async function POST(request: Request) {
  return NextResponse.json({ methods: "POST", hello: "world - POST" });
}
