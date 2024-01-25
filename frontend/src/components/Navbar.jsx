import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div className='navbar'>
    <Link to = "/">Movie</Link>
    <Link to = "/signup">Signup</Link>
    <Link to = "/login">Login</Link>
    <Link to = "/adminside">admin</Link>
</div>
  )
}

export default Navbar