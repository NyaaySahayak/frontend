import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { doLogin } from '../auth/authindex'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  async function loginUser(ev) {
    ev.preventDefault();
    if (email === '' || password === '') {
      toast.error("All Fields must be filled")
    }
    else {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, password
        }),
      })
      const data = await response.json()
        if (data.token) {
          doLogin(data ,()=>{
            toast.success('login successful')
          });
          navigate("/advocate/dashboard")
        } else {
          toast.error(data.message)
        }
      console.log(data)
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center  " style={{ height: "90vh" }}>
      <div className="row" style={{ height: "40vh" }}>
        <form className="col-md-12" style={{ width: "89vh" }} onSubmit={loginUser}>
          <div className="input-group mb-3">
            <input type="email" className="form-control w-100" id="floatingInput" placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control w-100" id="floatingPassword" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type='submit' value="Login">Login</button>
          </div>
          <div>
            <p>Don't have an account ? <Link to={'/register'}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
