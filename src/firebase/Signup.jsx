import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
import { Link, useNavigate} from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'


export default function Signup() {
    const[fname, setFname] = useState("") 
    const[lname, setLname] = useState("") 
    const[age, setAge] = useState("") 
    const[sub, setSub] = useState("") 
    const[mail, setMail] = useState("")
    const[pass, setPass] = useState("")

    const navigate = useNavigate()

    const signup =()=>{
        createUserWithEmailAndPassword(auth,mail,pass)
        .then ((user)=>{
           console.log(user.user.uid)
           setDoc(doc(firestore,"users", user.user.uid),{
            fname,lname,age,sub,mail
           })
           navigate("/dashboad")
        }).catch((err)=>{
           console.log(err)
        })
    }

  return (
    
    <div className='a' >
    
        <div className="d">
        <img  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
        </div>
        <div className="e">
      <center>
      <h1>SIGN UP</h1>
      <input type="text" placeholder='Enter your first name' onChange={(e)=> setFname (e.target.value)} /> <br />
      <input type="text" placeholder='Enter your last name' onChange={(e)=> setLname (e.target.value)} /> <br />
      <input type="text" placeholder='Enter your age' onChange={(e)=> setAge (e.target.value)} /> <br /> 
      <input type="text" placeholder='Enter your subject' onChange={(e)=> setSub (e.target.value)} /> <br /> 
      <input type="text" placeholder='Enter your email' onChange={(e)=> setMail (e.target.value)} /> <br /> 
      <input type="text" placeholder='Enter your password' onChange={(e)=> setPass (e.target.value)} /> <br /> 
      <button className='c' onClick={signup}>Sign up</button>  <br />
      <Link to='/login'>Log in</Link>
      </center>
      </div>
  
    </div>
    
  )
}
