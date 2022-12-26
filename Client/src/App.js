import Home from './pages/homePage/Home'
import Register from './pages/registerPage/Register'
import Login from './pages/loginPage/Login'
import PaymentPage from './pages/paymentPage/PaymentPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sign-up" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="donate" element ={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
