import Button from "./Button"

export default function Done({done,setDone,todos,setTodos,inProgress,setInProgress}){

    return(
        <div>
         {done.map(item=>{
             return(
                 <div>
                      <textarea type="text" value={item.title}/>
                      <Button all={(e)=>{
                        item.id=e
                        if(item.id==="todo"){
                            setTodos([
                                ...todos,
                                {
                                    title:item.title,
                                    id:e 
                                }
                            ])
                        }else if(item.id==="in Progress"){
                            setInProgress([
                                ...inProgress,
                                {
                                    title:item.title,
                                    id:e 
                                }
                            ])
                        }
                        {
                            setDone (
                              todos.filter(item=>item.id!=e)
                            )
                            }
                      }}/>
                 </div>
             )
         })}
        </div>
     )
}