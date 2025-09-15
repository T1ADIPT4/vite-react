import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')
  const validUser = 'admin'
  const validPass = 'secret'

  if (auth) {
    const [type, encoded] = auth.split(' ')
    const [user, pass] = atob(encoded).split(':')
    if (user === validUser && pass === validPass) return NextResponse.next()
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Preview"' }
  })
}
