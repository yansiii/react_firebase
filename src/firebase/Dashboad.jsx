import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, firestore } from '../../firebaseConfig'
// import {doc, getDoc} from './firebase/firestore'

export default function Dashboad() {
  useEffect (()=>{
    fetchUser()
  },[])

  const[fake, setFake]  = useState([]);
  console.log(fake)

  useEffect(()=>{
    fakestore();
  },[])

  const fakestore=async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    // console.log(response)
    const jsonData =await response.json();
    // console.log(jsonData)
    setFake(jsonData)
  }

  const[user1, setUser1] = useState("")

  const fetchUser = async()=>{
  let user = auth.currentUser;
  let data = await getDoc(doc(firestore, "users", user.uid))
  console.log(data.data());
  setUser1(data.data())
  }

  

  return (
    <div>
      <h1>Welcome {user1.lname} my Dashboad</h1>
      <h2>Fake Api store</h2>
      <div className='container'>
        {fake.map((values)=>{
         return(
         <>
         <div className='box'>
          <div className='content'>
           <h5>{values.title}</h5>
           <h3>Price : {values.price}</h3>
           {/* <p>{values.description} </p> */}
          </div>
          <img src={values.image} alt="" />
        
          <button className='b'>Buy Now</button>
          
        </div>
        
         </>
         )
        })}
      
    
      </div>
  

    </div>
  )
}


// 'https://fakestoreapi.com/products'