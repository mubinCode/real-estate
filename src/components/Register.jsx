import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {

    const [show, setShow] = useState(false)
    const {createUser, updateUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const displayName = form.get('user')
        const photo_url = form.get('photo_url')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password, show, createUser)
        // console.log(show)

        createUser(email, password)
        .then(res => {
            updateUser(displayName, photo_url);
            console.log(res.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="card bg-base-100 w-96 max-w-sm shrink-0 shadow-2xl">
          <h2 className="text-2xl text-center mt-5">Register Here</h2>
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="user"
                placeholder="Give your user name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo_URL</span>
              </label>
              <input
                type="text"
                name="photo_url"
                placeholder="Give your photo url"
                className="input input-bordered"
                required
                
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">
            Already have an account? please <Link to="/login" className="text-blue-400 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
