import React from 'react'
import Footer from './footer'
import Lfloaters from './Lfloaters'
import Rfloaters from './Rfloaters'

const Layout = ({children}) => {
  return (
    <div>
        <Lfloaters />
     {children}
     <Rfloaters/>
     <Footer />
    </div>
  )
}

export default Layout