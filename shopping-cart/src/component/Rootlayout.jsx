import React from 'react'
import { Outlet } from 'react-router-dom'
import Heading from '../Heading'
import { Provider } from 'react-redux'
import {store} from '../store/store'
import Footer from '../Footer'

function Rootlayout() {
  return (
    <>
    <Provider store={store}>
    <Heading/>
    <Outlet/>
    <Footer/>
    </Provider>
    </>
    
  )
}

export default Rootlayout