import { useState } from "react"

export default function Modal({modalActive,setModalActive,onAdd}){
    const[inputValue,setInputValue]=useState("")
      
    
    return(
        <div className={modalActive ?"modal active":"modal"} >
       
         <div className="textArea">
          
                <textarea type="text" value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value)
                }}/>
           
         </div>
       
            <div className="btns">
       
                <button onClick={()=>{
                  onAdd(inputValue)
                  setInputValue("")
                  
                }}>todo</button>

            
            </div>
            <button onClick={()=>setModalActive(false)}>X</button>
           

        </div>
    )
}