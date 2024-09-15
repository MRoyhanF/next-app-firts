import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    const isLogin = false;
    // if (request.nextUrl.pathname.startsWith('/about')) {
    //     if (isLogin){
    //         return NextResponse.redirect(new URL("/login", request.url))
    //         // return NextResponse.rewrite(new URL("/login", request.url))
    //     }
    // }
    if(!isLogin){
        return NextResponse.redirect(new URL("/login", request.url))
    }
}

// register middleware use at route
export const config = {
    matcher:[ "/dashboard/:path*", "/about/:path*"],
};