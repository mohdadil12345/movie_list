import React, { useState } from 'react'

const hostapi = "https://movie-lists-x2e8.onrender.com/movie"
function LoginPage() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
  
  
  const form_submit = (e)=> {
      e.preventDefault()
      const user = {
        email,
        password
      }
      loginnnn(user)
  }
  
  
    const loginnnn = async(user) =>  {
      
  
      let headersList = {
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
       
           "email" : user.email,
           "password" : user.password
       });
       
       let response = await fetch(`${hostapi}/users/login`, { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       });
       
       let data = await response.json();
       console.log(data);

       if(data.token){
        localStorage.setItem("token", data.token)
        alert("userlogeed in")
       }else{
        alert("wrong credntial")
       }
         
    }


    return (
        <div>
    
      <form onSubmit={(e)=> form_submit(e)}>
        <input type="text"  placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
        <input type="text"  placeholder='password' onChange={(e)=> setpassword(e.target.value)} />
    
        <button type='submit'>Submit</button>
      </form>
    
        </div>
      )
  
}

export default LoginPage