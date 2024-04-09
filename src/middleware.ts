
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

const privatePaths = ['/account']
const authPaths = ['/login','/register']
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value
  const {pathname} = request.nextUrl
  if(privatePaths.some(path=>pathname.startsWith(path)) && !accessToken){
    return NextResponse.redirect(new URL('/login',request.url))
  }
  if(authPaths.some(path=>pathname.startsWith(path)) && accessToken){
    return NextResponse.redirect(new URL('/',request.url))
  }
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    ...privatePaths,...authPaths
  ]
}