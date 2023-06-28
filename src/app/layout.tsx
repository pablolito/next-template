import './globals.css'
import { Inter } from 'next/font/google'
import Header, { Route } from './header'
import AuthProviders from "./_components/authProviders"
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { config } from './_utils/config'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  async function App({children}: {children: React.ReactNode}) {
    const {routes} = config
    const session = await getServerSession(authOptions)
    const getPublicRoutes = (routes:Route[]): Route[] => {
      return routes.filter((route) => {
        if(route.public === true) {
          return route
        }
      })
    }
    return (
      <div>
        <Header routes={!session ? getPublicRoutes(routes) : routes} />
        {children}
      </div>
    )
  }
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProviders>
        <App>{children}</App>
      </AuthProviders>
      </body>
    </html>
  )
}
