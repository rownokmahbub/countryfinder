import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import BackToTop from './BackToTop'
const Layout = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-[#020222] via-[#110114] to-[#050515] '>

    <main> {children}</main>
<BackToTop/>


    </div>
  )
}

export default Layout