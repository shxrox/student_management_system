package com.example.student_management_system.Controller;

import com.example.student_management_system.Model.Student;
import com.example.student_management_system.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/student")
    @CrossOrigin(origins = "http://localhost:5173/")
    public class StudentController {

        @Autowired
        private StudentService studentService;

        @GetMapping
        public List<Student> getAllStudents() {
            return studentService.getStudents();
        }

        @GetMapping("/{id}")
        public Student getStudentById(@PathVariable Long id) {
            return studentService.getStudentById(id);
        }

        @PostMapping
        public Student addStudent(@RequestBody Student student) {
            return studentService.saveStudent(student);
        }

        @PutMapping("/{id}")
        public Student updateStudent(@PathVariable Long id, @RequestBody Student student) {
            return studentService.updateStudent(id, student);
        }

        @DeleteMapping("/{id}")
        public void deleteStudent(@PathVariable Long id) {
            studentService.deleteStudent(id);
        }
}
