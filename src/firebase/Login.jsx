import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { auth } from '../../firebaseConfig'


export default function Login() {

    const[mail, setMail] = useState("")
    const[pass, setPass] = useState("")

    const navigate = useNavigate()

    const login =()=>{
        signInWithEmailAndPassword(auth,mail,pass)
        .then ((user)=>{
           console.log(user)
           navigate("/dashboad")
        }).catch((err)=>{
           console.log(err)
        })
    }


  return (
    
      <div className='h'>
        
        <div className="f">
        <img  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        </div>
        <div className="g">
      <center>

      <h1>LOG IN</h1>
      <input type="text" placeholder='enter you email' onChange={(e)=> setMail (e.target.value)} /> <br />
      <input type="text" placeholder='enter you pass' onChange={(e)=> setPass (e.target.value)} /> <br />
      
      <button className='c' onChange={login}>Sign up</button> <br />
      <Link to={'/'}>Sign up</Link>
      </center>
      </div>
    </div>
    
  )
}
