import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const token = request.headers.get('Authorization')
    const cookieStore = await cookies()
    cookieStore.set('checked', 'false')
    return new Response("<h1>Hello, Next.js!</h1>" + (token ? ` Your token is ${token}` : ''),
        {
            status: 200,
            headers: { 'Content-Type': 'text/html' },
        });
}