import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const URL = "http://localhost:8080";
  const REGISTER_URL = URL + "/api/auth/signup";
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [username, setFullname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      window.alert("Compila tutti i campi!");
      return;
    }
    try {
      const response = await fetch(REGISTER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, email: email, password }),
      });
      if (response.ok) {
        window.alert("Registrazione avvenuta con successo");
      } else {
        const error = await response.text();
        window.alert("Errore: " + error);
      }
    } catch (err) {
      window.alert("Errore di rete: " + err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="form my-3">
                <label htmlFor="Name">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  value={username}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!username || !email || !password}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
