import React from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import CreateRecipe from "./components/CreateRecipe";


import {BrowserRouter,Routes,Route} from 'react-router-dom'



function App() {
  return <>
    <BrowserRouter>
   
      <Routes>
        
        <Route path='/' element={<SignIn />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/sign-up' element={<SignUp />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
         
 
    </Routes>
  </BrowserRouter>
  </>
}

export default App;
