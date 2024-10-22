import React,{useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'

function Signup() {

    let emailInputRef=useRef();
    let passwordInputRef= useRef();
    let navigate = useNavigate();


    let validateSignup = ()=>{
           
        if(emailInputRef.current.value === "anvith@gmail.com" && passwordInputRef.current.value === "navisha"){
            localStorage.setItem("email",emailInputRef.current.value);
            localStorage.setItem("password",passwordInputRef.current.value);
            
            
            sessionStorage.setItem("email",emailInputRef.current.value);
            sessionStorage.setItem("password",passwordInputRef.current.value);

            navigate("Home");
        }else{
            alert("Invalid Username&password")
        } 
    }

    useEffect(()=>{
        emailInputRef.current.value = localStorage.getItem("email");
        passwordInputRef.current.value = localStorage.getItem("password");
    
        validateSignup();
    }
   )
    return (
    <div>
       <h2>LOGIN</h2>
        <form>
       
        <div>
            <label>Email</label>
            <input ref={emailInputRef}></input>
        </div>
        <div>
            <label>Password</label>
            <input ref={passwordInputRef}></input>
        </div>
        
        <button type='button'
        
        onClick={() => {

            
            validateSignup ();
        }}
          
    
        >
          Login</button></form>
       
      
    </div>
  );
}

export default Signup;
