import React, { useState } from 'react'




function Signup() {

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [pass, setpassword] = useState("")


const form_submit = (e)=> {
    e.preventDefault()
    const user = {
      username,
      email,
      pass,
    }
    registration(user)
}


  const registration = async(user) =>  {
    
    let headersList = {
      "Content-Type": "application/json"
     }
     
     let bodyContent = JSON.stringify({
     
         "username" :user.username,
         "email" : user.email,
         "pass" : user.pass,
        
     }
     
     
        );
     
     let response = await fetch("https://movie-lists-x2e8.onrender.com/user/register", { 
       method: "POST",
       body: bodyContent,
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
     
  }


  return (
    <div>

  <form onSubmit={(e)=> form_submit(e)}>
    <input type="text" placeholder='name' onChange={(e)=> setusername(e.target.value)} />
    <input type="text"  placeholder='email' onChange={(e)=> setemail(e.target.value)}/>
    <input type="text"  placeholder='password' onChange={(e)=> setpassword(e.target.value)} />

    <button type='submit'>Submit</button>
  </form>

    </div>
  )
}

export default Signup