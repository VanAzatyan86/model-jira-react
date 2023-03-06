import { useState } from "react"

export default function Button({all}){
 const[btn,setbtn]=useState(["todo","in Progress","done"])

    return(
   <select name="" id="" onChange={(e)=>{
      all(e.target.value) 
      
   }}>
    {
      btn.map(item=>{
        return(
          <option value={item} >{item}</option>
        )
      })
    }
   </select>
    )
} 