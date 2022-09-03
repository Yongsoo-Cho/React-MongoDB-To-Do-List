import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import TaskList from "./tasklist/TaskList";
import DeadPage from "./DeadPage/DeadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList/>}/>
        <Route path="*" element={<DeadPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
