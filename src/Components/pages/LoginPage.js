import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        const token = data.token;
        const testResponse = await fetch('http://localhost:4000/test', {
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });
        // const testData = await testResponse.text();
        if (testResponse.ok) {
          console.log("testrespone")

          doLogin(data, () => {
            toast.success('login successful')
          });
          if (data.User.role === "advocate") {
            navigate("/advocate/dashboard")
            console.log("testData ===> ", data);
          }else{
            navigate("/admin/dashboard")
          }

        } else {
          toast.error("Token verification failed");
        }
      } else {
        toast.error(data.message)
      }
      console.log(data)
    }
  }

  return (
<div style={{background: "linear-gradient(90deg, rgba(0,120,183,1) 0%, rgba(7,24,68,1) 100%)"}}>
    <div className="container d-flex justify-content-center align-items-center  " style={{ height: "90vh"  }}>
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
          
        </form>
      </div>
    </div>
    </div>
  )
}
