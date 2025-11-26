import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Contactus from './components/Contactus'
import Homes from './components/Homes'
import Products from './components/Products'
import CategoryDetail from './page/CategoryDetail'
import Cards from './components/Cards'
import Faq from './components/Faq'
import Blog from './components/Blog'
import Login from './components/Login'
import Brand from './components/Brand'
import Admin from './components/Admin'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>

         
          {/* <Route index element={<Homes/>} /> */}

       
         
          <Route path="/cards" element={<Cards/>} />
           <Route path="/homes" element={<Homes/>} /> 
          <Route path="/blog" element={<Blog/>} />
           <Route path="/login" element={<Login/>} />
          <Route path="/brand" element={<Brand/>} /> 
           <Route path="/products" element={<Products/>} />
           {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
           <Route path='/faq' element={<Faq/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/contactus' element={<Contactus/>} />

         
          <Route path="category/:id" element={<CategoryDetail/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
