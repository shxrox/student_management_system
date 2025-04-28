import axios from 'axios';

const url="http://localhost:8080/student";

export const getStudents=async()=>{
    const response=await axios.get(url);
    return response.data;
}

export const getStudentById=async(id)=>{
    const response=await axios.get('${url}/${id}');
    return response.data;
}

export const addStudent=async(student)=>{
    const response=await axios.post(url,student)
    return response.data;
}

export const updateStudent=async(id ,student)=>{
    const response=await axios.post("${url}/${id}",student)
    return response.data;
}

export const deleteStudent=async(id)=>{
    const response=await axios.post("${url}/${id}")
    return response.data;
}