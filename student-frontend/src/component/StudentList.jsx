import { useState, useEffect } from "react";
import {getStudents, deleteStudent} from "../services/Api";
import { useNavigate } from "react-router-dom";
import '../style/StudentList.css';


const StudentList = () => {

  const[students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    const response = await getStudents();
    setStudents(response); // assuming students are in response.data
  };
  

  useEffect( () => {
    fetchStudents();
  }, []);

  const handleDelete= async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return(
    <>
 <h1>Student Management Stystem</h1>
    <ul>{students.map(student => 
    <li key={student.id}>
    {student.id}-{student.name}-{student.email}
    <button onClick={() => handleDelete(student.id)}>delete</button>
    <button onClick={() => navigate(`/edit/${student.id}`)}>edit</button>
    </li>
    )}
    </ul>
  
    <button className="add-student-btn" onClick={() => navigate('/add')}>Add Student</button>

   </>
  )
}
export default StudentList;