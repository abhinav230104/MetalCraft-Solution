import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3333/signUp`, data);
      toast.success(res.data.message);
      navigate("/login");
    } catch (error) {
      console.log(error, "Error");
      toast.error("Signup failed.");
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
                <h1 className="display-6 text-uppercase mb-4">Sign Up</h1>
                <div className="d-flex">
                  <i className="fas fa-user-plus fa-3x text-primary me-4" />
                  <p className="fs-5 fst-italic mb-0">
                    Join us and enjoy access to premium features. Fill in your details and start your journey!
                  </p>
                </div>
              </div>

              {/* Right Column - Signup Form */}
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.5s">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      name="name"
                      className="form-control border-0 bg-light"
                      placeholder="Full Name"
                      value={data.name}
                      onChange={handleChange}
                      required
                    />
                    <label>Full Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      className="form-control border-0 bg-light"
                      placeholder="Email"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                    <label>Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="tel"
                      name="mobile"
                      className="form-control border-0 bg-light"
                      placeholder="Mobile"
                      value={data.mobile}
                      onChange={handleChange}
                      required
                    />
                    <label>Mobile</label>
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
                    <label>Password</label>
                  </div>
                 <button className="btn btn-primary w-100 py-3" type="submit">
                    Create Account
                  </button>
                  <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
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

export default Signup;
