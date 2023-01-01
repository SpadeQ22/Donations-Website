import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"
import "./login.css";
import FormInput from "../../components/Form/FormInput";
import Nav from '../../components/Home_page/navbar/nav';
import {loginAuthAdmin} from '../../middleware/auth.service';
import { useCookies } from 'react-cookie';

const Login = () => {
  const [cookie, setCookie] = useCookies(['user']);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const loginAuth = async(e)=>{
    e.preventDefault()
    const response = await loginAuthAdmin(values.email, values.password, setCookie);
    if(response.auth){
      navigate("/admin-dash");
    } else {
      window.alert("Wrong Credentials");
    }

  }
  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <div className="login">
      
      <form className="logInForm" onSubmit={loginAuth}>
        <h1 className="LogInHeader">Admin Log In</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="loginBtn">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;