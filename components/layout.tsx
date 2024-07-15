import React from 'react'
import Navbar from './header'
import Footer from './footer'

export const Layout = ({ children }: any) => {
    return (
        <div className='Layout'>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      )
}
