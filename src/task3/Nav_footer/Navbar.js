import './Navbar.css'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [Search, setSearch] = useState("");
      return (
        <>

      <header>
     
       
     <div className='contents'>
        <h1> Movie</h1>
 
      </div>
     
  </header>
 
      </>  
        
    );
  }
  
  export default Navbar;