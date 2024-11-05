import React, { useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/api/auth/register', { username, password });
            console.log('Registration response:', response.data); // Verificar respuesta del servidor en consola
            toast.success('Register successful', {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: 'dark'
            });
            // Redirigir a la página de login después del registro exitoso
            window.location.href = '/login';
        } catch (error) {
            console.error('Registration error', error);
            toast.error('Error on register!', {
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
    }

    return (
        <div className="registerDiv">
            <form className="card registerCard" onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary btnSubmitReg">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Register;
