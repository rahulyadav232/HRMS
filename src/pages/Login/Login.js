import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validateForm()) return;

    try {
      const res = await axios.post("hrms-w617.vercel.app/login", formData, { withCredentials: true });
      console.log("Login successful:", res.data);
      navigate("/dashboard");
    } catch (err) {
      setServerError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="login-container">
      <div className="login-icon-box">
        ☐ <span>Logo</span>
      </div>
      <div className="login-box">
        <div className="left-section-login">
          <h2>Welcome Back</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="right-section-login">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group-login">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-group-login password-field-login">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            {serverError && <p className="error">{serverError}</p>}
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
