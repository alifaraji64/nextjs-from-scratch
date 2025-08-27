import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith('/products')) {
        console.log('About page is visited')
        return NextResponse.redirect(new URL('/', request.url));
    }
}
// export const config = {
//     matcher: ['/about'],
// }