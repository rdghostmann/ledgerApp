// middleware.js
import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export async function middleware(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  })

  const { pathname } = req.nextUrl

  // List of public routes
  const publicPaths = ["/", "/login", "/register"]
  const isPublic = publicPaths.includes(pathname)

  // Allow public pages without check
  if (isPublic) return NextResponse.next()

  // If not authenticated, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  const status = token?.status
  const role = token?.role

  // 🔒 If inactive, force to /pending
  // if (status === "inactive" && pathname !== "/pending") {
  //   return NextResponse.redirect(new URL("/pending", req.url))
  // }

  // 🔐 Role-based protection
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url))
  }

  if (pathname.startsWith("/dashboard") && role !== "user") {
    return NextResponse.redirect(new URL("/admin", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"],
}
