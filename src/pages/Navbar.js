import React from 'react'
import { Link} from "react-router-dom";
const Navbar = () => {
  return (
    
    <div className='navbar'>
      <Link to="/home" className='link3'>Recipes Book🍽️</Link>
      <Link to="/home" className='link1'>Home</Link>
      <Link to="/create-recipe" className='link2'>Create Recipe</Link>
           </div>
  )
}

export default Navbar
