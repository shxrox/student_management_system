import { useState } from "react";
import { addStudent } from "../services/Api";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {

  const [name, setName] =useState([]);
  const [email, setEmail]=useState([]);
  const navigate =useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    await addStudent({name, email});
    navigate('/');
  };

  return(
    <>
     <h1>Student Management Stystem</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="submit">save</button>
      <button onClick={()=>navigate('/')}>cancel</button>
      
    </form>
    </>
  )
}
export default StudentForm;