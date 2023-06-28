import { verifyJwt } from "@app/api/utils/encryption.utils";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/api/goodies") && String(request.method).toUpperCase() !== "POST") {
        return NextResponse.next();
    }

    const unprotectedLinks = ["/api/auth/sign_in", "/api/auth/sign_up", "/api/allocations"];
    if (unprotectedLinks.includes(request.nextUrl.pathname)) {
        return NextResponse.next();
    }

    const partiallyProtectedLinks = ["/api/goodies"];

    for (const link of partiallyProtectedLinks) {
        if (link === request.nextUrl.pathname) {
            if (String(request.method).toUpperCase() !== "POST") {
                return NextResponse.next();
            }
        }
    }

    const token = request.cookies.get("a_cred");

    if (!token) {
        const response = NextResponse.json({ message: "Please sign in or sign up to continue" }, { status: 401 });
        response.cookies.delete("a_cred");
        return response;
    }

    const isValidToken = await verifyJwt(token.value);

    if (!isValidToken) {
        const response = NextResponse.json({ message: "Session expired, please sign in or sign up to continue" }, { status: 401 });
        response.cookies.delete("a_cred");
        return response;
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-u-session", JSON.stringify(isValidToken.payload));

    const response = NextResponse.next({
        request: {
            headers: requestHeaders
        }
    });

    return response;
}

// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log(req.nextauth);
//     if (
//       req.nextUrl.pathname === "/admin-dashboard" &&
//       req.nextauth.token?.role !== "admin"
//     ) {
//       return new NextResponse("You are not authorized!");
//     }
//   },
//   {
//     callbacks: {
//       authorized: (params) => {
//         let { token } = params;
//         return !!token;
//       },
//     },
//   }
// );

// export const config = { matcher: ["/goodies"] };
// export const config = { matcher: ["/:path*"] };
