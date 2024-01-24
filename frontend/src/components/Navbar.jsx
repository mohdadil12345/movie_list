import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
<div className='navbar'>
    <Link to = "/movie">Movie</Link>
</div>
  )
}

export default Navbar