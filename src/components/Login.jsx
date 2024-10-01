import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        console.log(show)

        signIn(email, password)
        .then(res => {
          navigate(location?.state ? location.state : '/')
            console.log(location.state)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl text-center mt-5">Login Now!</h2>
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className='flex items-center relative'>
              <input
                type= {show ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <p onClick={() =>setShow(!show)}>{show ? <IoEyeOffSharp className='text-2xl absolute'/> : <IoEyeSharp className='text-2xl absolute top-1/4 right-0'/> }</p>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account? please <Link to="/register" className="text-blue-400 font-semibold">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;