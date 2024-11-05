import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/api/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successfull',{
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
})
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Error on login!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'dark'
    });
    }
  };

  return (
    <div className='loginDiv'>
        <form className='card loginCard' onSubmit={handleSubmit}>
            <div className="card-body">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary btnSubmitLog">Submit</button>
            </div>
            <a href='/register' className='btn btnGoToReg'>Register here</a>
        </form>
    </div>
  );
};

export default Login;
