import React from 'react'
import Movie from './Movie'
import { Route, Routes } from 'react-router-dom'

function Allroutes() {
  return (
            <div>
        <Routes>
            <Route path = "/movie" element = {<Movie/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes