import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './component/StudentList';
import StudentForm from './component/StudentForm';
import EditStudent from './component/EditStudent';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
