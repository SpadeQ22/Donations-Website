import './styles/App.css';
import Register from './pages/Register'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="sign-up" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
