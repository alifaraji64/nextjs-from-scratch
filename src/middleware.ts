import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    '/products-db/:path*', '/profile/:path*'])
const isAdminRoute = createRouteMatcher(['/admin/:path*'])

export default clerkMiddleware(async (auth, request) => {
    console.log('role:', ((await auth()).sessionClaims?.metadata as { role?: string })?.role);
    // {
    // 	"metadata": "{{user.public_metadata}}"
    // }
    //add this object to configuration->session->claims
    if (isAdminRoute(request) && ((await auth()).sessionClaims?.metadata as { role?: string })?.role !== 'admin') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    if (isProtectedRoute(request)) { await auth.protect() }// or use `auth().sessionClaims`

})

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
};