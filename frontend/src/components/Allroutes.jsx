import React from 'react'
import Movie from './Movie'
import { Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import LoginPage from './Login'
import MovieDetails from './MovieDetails'
import Admin from './Admin'

function Allroutes() {
  return (
            <div>
        <Routes>
            <Route path = "/" element = {<Movie/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/login" element = {<LoginPage/>}/>
            <Route path = "/details/:id" element = {<MovieDetails/>}/>
            <Route path = "/adminside" element = {<Admin/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes