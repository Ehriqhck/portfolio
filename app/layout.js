import '@styles/globals.css'
import { Exo } from 'next/font/google'
import 'primereact-sass-theme-9.6.2/themes/mytheme/theme.scss'
import NavEditor from '@components/NavEditor.jsx'
import { Context } from '@components/Provider.jsx'
import { useContext } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import NoSsr from '@components/NoSsr'
import localFont from '@next/font/local'

export const metadata = {
  title: 'Control Mapper',
  description: ''
}

const varino = localFont({ src:
  [
    {
      path:  '../public/assets/fonts/Varino-Normal.otf',
      weight: '400',
      style: 'normal',
    },
  ] })

const RootLayout = ({ children }) => (
  <html lang='en' className='dark'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className={'app ' + varino.className }>
          <NavEditor />

          {children}
        </main>
      </Provider>
    </body>
  </html>
)

export default RootLayout
