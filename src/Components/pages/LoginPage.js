import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doLogin } from '../auth/authindex';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function loginUser(ev) {
        ev.preventDefault();
        if (email === '' || password === '') {
            toast.error("All Fields must be filled");
        } else {
            const response = await fetch('http://localhost:4000/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, password
                }),
            });
            const data = await response.json();
            if (data.token) {
                const token = data.token;
                const testResponse = await fetch('http://localhost:4000/test', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                });
                if (testResponse.ok) {
                    doLogin(data, () => {
                        toast.success('login successful');
                    });
                    if (data.User.role === "advocate") {
                        navigate("/advocate/dashboard");
                    } else {
                        navigate("/admin/dashboard");
                    }
                } else {
                    toast.error("Token verification failed");
                }
            } else {
                toast.error(data.message);
            }
        }
    }

    return (
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Login</h3>
                                <form onSubmit={loginUser}>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LoginPage;
