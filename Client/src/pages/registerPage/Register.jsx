import { useState } from "react";
import "./register.css";
import FormInput from "../../components/Form/FormInput";
import Nav from "../../components/Home_page/navbar/nav"
import * as Auth from '../../middleware/auth.service'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

const Register = () => {
  const [cookies, setCookie] = useCookies(['user']);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName:"",
    lastName:"",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    
    {
      id: 6,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 7,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    delete values.confirmPassword;
    const response = await Auth.registerAuthUser(values, setCookie);
    if(response.auth){
      navigate("/");
    } else {
      window.alert("Missing Info/Weak Data");
    }

  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />
      <div className="register">
      <form className="registerForm" onSubmit={handleSubmit}>
        <h1 className="registerHeader">Sign Up</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="registerBtn">Submit</button>
      </form>
    </div>
    </div>
    
  );
};

export default Register;