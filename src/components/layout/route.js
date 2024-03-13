import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from '../header/header';
import Footer from '../footer/footer';
import Home from '../home/home';
import Logout from '../logout/logout';
import Details from '../products/details';

function MainRouter() {
  return (
    <>
       <Router>
        <Header/>

         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/logout' element={<Logout/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        
        </Routes>

         <Footer/>

       </Router>
    
    </>
  )
}

export default MainRouter;