import { useNavigate, useState } from "react-router-dom"
import { useState } from "react"
import { getStudents } from "../services/Api";
import { getStudents } from "../services/Api";

const StudentList=()=>{

    const [students , setStudents]=useState([]);
    const navigate=useNavigate();

    const fetchStudent=async()=>
        Const response=await getStudents();
        setStudents(response);
}