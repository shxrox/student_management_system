import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent, deleteStudent } from "../services/Api";

const EditStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getStudentById(id);
        setName(response.name);
        setEmail(response.email);
      } catch (error) {
        console.error("Failed to fetch student:", error);
      }
    };
    fetchStudent();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, { name, email });
      navigate("/");
    } catch (error) {
      console.error("Failed to update student:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteStudent(id);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete student:", error);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h1>Edit Student</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Save</button>
      <button type="button" onClick={handleDelete}>Delete</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditStudent;
