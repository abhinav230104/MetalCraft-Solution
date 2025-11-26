import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3333/login`, data);
      if (res.data.status === 200) {
        setData(res.data.body);
        sessionStorage.setItem("userInfo", JSON.stringify(res.data.body));
        toast.success(`Hello ${res.data.body.name}! Login successful`);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <main className="main">
      <div className="container-fluid newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container pb-5">
          <div className="bg-white p-5 mb-5 shadow">
            <div className="row g-5">
              {/* Left Column */}
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
                <h1 className="display-6 text-uppercase mb-4">Login</h1>
                <div className="d-flex">
                  <i className="fas fa-sign-in-alt fa-3x text-primary me-4" />
                  <p className="fs-5 fst-italic mb-0">
                    Access your dashboard and manage your account with ease. Welcome back!
                  </p>
                </div>
              </div>

              {/* Right Column - Login Form */}
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 bg-light"
                      placeholder="Your Email"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      className="form-control border-0 bg-light"
                      placeholder="Password"
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Login
                  </button>
                  <p className="text-center mt-3">
                    Don't have an account? <Link to="/signup">Signup</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
