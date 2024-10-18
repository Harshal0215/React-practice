import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,NavLink } from 'react-router-dom'

function Heading() {
  return (
      <nav style={{height:'8vh',display:'flex',justifyContent:'space-around',backgroundColor:'#cdbda6',position:'static',top:'0'}}>
       
        <ul style={{display:'flex', justifyContent:'center',alignItems:'center', listStyle:'none', margin:'auto',gap:'20px',fontSize:"30px"}}>
            <li>
              <Link className='navbar-link' to='/'>Home</Link>
            </li>
            <li>
              <Link className='navbar-link' to='/products'>Products</Link>
            </li>
            <li>
              <Link className='navbar-link'  to='/cart'>Cart</Link>
            </li>
        </ul>
    </nav>
    
  )
}

export default Heading