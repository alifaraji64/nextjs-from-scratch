import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { request } from "http";
// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/products/')) {
//         console.log('About page is visited')
//         return NextResponse.redirect(new URL('/', request.url));
//     }
// }
// // export const config = {
// //     matcher: ['/about'],
// // }
const isProtectedRoute = createRouteMatcher([
    '/products-db/:path*',])

export default clerkMiddleware(async (auth, request) => {
    if (isProtectedRoute(request)) {await auth.protect() }
})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};