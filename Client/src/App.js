import Home from './pages/homePage/Home'
import Register from './pages/registerPage/Register'
import Login from './pages/loginPage/Login'
import PaymentPage from './pages/paymentPage/PaymentPage'
import AdminDash from './pages/adminPage/AdminDash'
import Users from './components/AdminDashboard/users'
import Receipts from './components/AdminDashboard/receipts'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="donate" element ={<PaymentPage />} />
            <Route path="admin-dash" element={<AdminDash />} />
            <Route path="users" element={<Users />} />
            <Route path="receipts" element={<Receipts />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;



