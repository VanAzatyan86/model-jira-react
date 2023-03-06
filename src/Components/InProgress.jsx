import Button from "./Button"

export default function InProgress({inProgress,setInProgress,todos,setTodos,done,setDone}){

    return(
       <div>
        {inProgress.map(item=>{
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
                            setInProgress (
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