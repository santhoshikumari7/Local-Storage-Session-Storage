import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <div>
       <nav>
        <NavLink 
        style={(obj) => {
           if(obj.isActive === true){
            return{backgroundColor:"darkorange",
                color:"white"};
           

            }
           
        }} to="/signup"
        >
          Signup</NavLink>
        <NavLink style={(obj) => {
           if(obj.isActive === true){
             return{backgroundColor: "darkorange",
                color:"white"};
             } 
             }} to="/home">Home</NavLink>
        <NavLink style={(obj) => {
            if(obj.isActive === true){
             return{backgroundColor: "darkorange",
                color:"white"};
             } 
        }}to="/logout"
        >
          Logout</NavLink>
        
      
      </nav>
    </div>
  );
}

export default TopNavigation
