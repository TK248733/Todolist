import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Create = () => {
  let [title,setTitle]=useState("")
  let [author,setauthor]=useState("")
  let [taskinfo,settaskinfo]=useState("")
  let history=useHistory("")
  let handleSubmit=(h)=>{
    h.preventDefault();
    let blogs={title,author,taskinfo}
    // console.log(blogs);
    setTimeout(() => {
    fetch("http://localhost:8000/blogs",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(blogs)
    }).then(()=>{
      alert("New To do list Added...")
      history.push('/')
    })
  }, 1000);
  };
  
  return (
    <div className="create-page">
      <h1>Create New To Do List</h1>
        <div>
        <form onSubmit={handleSubmit}>
            <label className="tex">Task Title :</label ><br/>
            <input type="text" className="inp" required value={title} onChange={(h)=>setTitle(h.target.value)}/><br/>
            <label className="tex">Assigned To :</label><br/>
            <input type="text" className="inp" required value={author} onChange={(h)=>setauthor(h.target.value)}/><br/>
            <label className="tex">To Do List :</label><br/>
            <input type="text" className="inp" required value={taskinfo} onChange={(h)=>settaskinfo(h.target.value)}/><br/>
            <button className="but">Add New To Do list</button>
        </form>
        </div>
        {/* <h2>{title}</h2>
        <h2>{author}</h2> */}
    </div>
  );
};

export default Create;
