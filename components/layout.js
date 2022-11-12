import React from 'react'

import BackToTop from './BackToTop'
const Layout = ({children}) => {
  return (
    <div className='bg-gradient-to-r from-[#020222] via-[#110114] to-[#050515] '>

    <main className='bg-gradient-to-r from-[#010113] via-[#090014] to-[#010113]'> {children}</main>
<BackToTop/>


    </div>
  )
}

export default Layout