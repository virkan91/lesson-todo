import React, { useState } from "react";
import "./App.css";
import { Button, IconButton } from "@mui/material";

const App = () => {


  
  // const [cnt, setCnt] = useState(0)

  const [todos, setTodos] = useState([])

  const [title, setTitle] = useState("")
  const [modal, setModal] = useState(false)
  const [idx, setIdx] = useState(null)
  
  const [newTitle, setNewTitle] = useState("")

  const addTodo =()=>{
    if(title.trim().length == 0){
      return alert("Type something")
    }
    else{
      let todo = {
        id:new Date().getTime(),
        title: title,
        complete:false
      }
  
      let ar = [...todos, todo]
  
      setTodos(ar)
      setTitle("")
    }
  }

  // fn-delete

  const deleteTodo =(id) =>{
    let ar = todos.filter((elem)=>{
     return elem.id!=id
    })
    setTodos(ar)
  }
  

  // fn Edit 

  const handleModal = (elem)=>{
    setModal(true)
    setNewTitle(elem.title)
    setIdx(elem.id)

  }

  const editTodo = ()=>{
    let ar = todos.map((e)=>{
      if(e.id == idx){
        e.title = newTitle
      }
      return e
    })
    setTodos(ar)
    setModal(false)
  }



  return <div>
    {/* <h1>{cnt}</h1>
    <button onClick={()=>setCnt(cnt+1)}>+</button> <br />
    <button onClick={()=>setCnt(cnt-1)}>-</button> <br />
    <button  onClick={()=>setCnt(0)}>reset</button> <br /> */}

    <div className="add">
      <input type="text"  value={title} onChange={(event)=>setTitle(event.target.value)} />
      <IconButton variant="contained" color="success" onClick={()=>addTodo()}>Add</IconButton>
      


    </div>

    {
      todos.map((e)=>{
        return <>
          <h1>{e.title}</h1>
          <Button variant="contained" color="error" onClick={()=>deleteTodo(e.id)}>Delete</Button>
          <Button variant="contained" color="warning" onClick={()=>handleModal(e)} >Edit</Button>
          <Button variant="contained" color="primary" onClick={()=>(e.id)} >Complited</Button>

        </>
      })
    }

    {
      modal == true ? <div>
        <input type="text" value={newTitle} onChange={(event)=>setNewTitle(event.target.value)} name="" id="" />
        <button onClick={()=>editTodo()}>Submit</button>
      </div> : null
    }

  </div>;
};

export default App;
