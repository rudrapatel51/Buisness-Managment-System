import React, { useState } from 'react'
import axios from 'axios';

const AdminLogin = () => {
    const [ email , setEmail] = useState();
    const [ password , setPassword] = useState();

    const handleSubmitForm = (e) => {
        e.preventDefault();
        axios.post("enter the backend url", {email,password})
        console.log(email,password)
        .then(res => console.log(res))
        .then(err => console.log(err))
    }
  return (
    <div>
    <form onSubmit={handleSubmitForm}>
     <label>Email</label>
     <input type='text' onChange={(e) => setEmail(e.target.value)} name='name' id='name' placeholder='Email'/>
     <label>Password</label>
     <input type='password' onChange={(e) => setPassword(e.target.value)} name='password' id='password' placeholder='*********'/>
     <button type='submit'>Login</button>
     </form> 
    </div>
  )
}

export default AdminLogin
