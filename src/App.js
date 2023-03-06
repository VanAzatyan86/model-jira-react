
import { useState } from 'react';
import './App.scss';
import Modal from './Components/Modal';
import Todo from './Components/Todo';
import InProgress from './Components/InProgress';
import Done from './Components/Done';


function App() {

const [todos,setTodos]=useState([])
const[modalActive,setModalActive]=useState(false)
const[inProgress,setInProgress]=useState([])
const[done,setDone]=useState([])




  return (
     <div className='App'>
      <button  onClick={()=>setModalActive(true)}>create </button>
      <Modal modalActive={modalActive} setModalActive={setModalActive} onAdd={(inputValue)=>{
             setTodos([
              ...todos,
              {
                title:inputValue,
                id:""
              }
              
             ])
             
      }}/>
          
      <div className='content'>
      

        <div>
          <div><p>TO DO</p></div>
           <Todo todos={todos} setTodos={setTodos} inProgress={inProgress} setInProgress={setInProgress}
          done={done} setDone={setDone}

           />
           
        </div>

        <div>
          <div ><p>IN PROGRESS</p></div> 
          <InProgress inProgress={inProgress} setInProgress={setInProgress} todos={todos} setTodos={setTodos} done={done} setDone={setDone}/>
        </div>

        <div>
          <div> <p>DONE</p></div>
           <Done   done={done} setDone={setDone} inProgress={inProgress} setInProgress={setInProgress} todos={todos} setTodos={setTodos}/>
        </div>
      </div>
      
      
     </div>

    
   
  );
}

export default App;
