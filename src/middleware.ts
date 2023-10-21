import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({ req, res });


    const { data: { session }, error } = await supabase.auth.getSession();

    // if (!session && req.nextUrl.pathname.endsWith("/")) {
    //     const redirectUrl = req.nextUrl.clone();
    //     redirectUrl.pathname = "/login";
    //     return NextResponse.redirect(redirectUrl);
    // }



    if (req.url.includes("/login")) {
        if (!session) {
            return;
        }
        return NextResponse.redirect(new URL("/", req.url));
    }

    if (!session) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};