import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

import Homes from './Homes'
import Blog from './Blog'
import Brand from './Brand'
import Login from './Login'
import Cards from './Cards'
import Products from './Products'


const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>

    

      <Homes/>
    <Cards/>
    <Products/>
    <Login/>
    <Brand/>
    <Blog/>  
    <Footer/>
    
    
    
    </>
  )
}

export default Layout



