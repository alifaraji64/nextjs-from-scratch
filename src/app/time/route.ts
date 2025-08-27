import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const time = new Date().toISOString();
    return new Response(`The time is ${time}`, { status: 200 });

}