

import Button from "./Button"
export default function Todo({todos,setTodos,inProgress,setInProgress,done,setDone,value}){

    return(
        <div>
         <div>
            {
                todos.map(item=>{
                    return(
                        <div>
                           <textarea type="text" value={item.title}/>
                           <Button 
                           
                            all={(e)=>{
                               item.id=e
                               if(item.id==="in Progress"){
                                setInProgress([
                                    ...inProgress,
                                    {
                                        title:item.title,
                                        id:e
                                      }
                                   ])
                                   
                               }else if(item.id==="done"){
                                setDone([
                                    ...done,
                                    {
                                        title:item.title,
                                        id:e  
                                    }

                                ])
                               }
                              {
                              setTodos(
                                todos.filter(item=>item.id!=e)
                              )
                              }
                              
                            }}/>
                          
                        </div>
                    
                        
                    )
                    
                })
            }
           
         </div>
 
        </div>
    )
}