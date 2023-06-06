import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

function Register() {

  const[username,usernameChange] =useState("");
  const[email,emailChange] = useState("");
  const[password,passwordChange] = useState("");

  const navigate = useNavigate()

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Tolong Masukkan ';
    if (username === null || username === ''){

    }
    if( email === null || email === '') {
      isproceed = false;
      errormessage += 'Email';
    }
    if( password === null || password === '') {
      isproceed = false;
      errormessage += 'Password';
    }
    if (!isproceed) {
      toast.warning(errormessage)
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning('Email tidak Valid')
      }
    }
    return isproceed;
  }

  const prosesSignUp=(e)=> {
    e.preventDefault();
    let regobj = {username,email,password};
    if (IsValidate()) {
      // console.log(regobj);
      fetch("http://localhost:8000/user/",{
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify(regobj)
      }).then((res) => {
        toast.success('Registered Successfully.')
        navigate('/login');
      }).catch((err) => {
        toast.error('Failed : '+err.message);
      });
    }
  }

  return (
    // <div className="flex flex-col items-center">
    //   <h2 className="text-2xl font-bold mb-4">Register</h2>
    //   <form className="flex flex-col gap-4">
    //     <div>
    //       <label htmlFor="email" className="text-lg font-semibold">
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         value={email}
    //         onChange={(e) => emailChange(e.target.value)}
    //         className="border border-gray-300 px-4 py-2 rounded-md"
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password" className="text-lg font-semibold">
    //         Password:
    //       </label>
    //       <input
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => passwordChange(e.target.value)}
    //         className="border border-gray-300 px-4 py-2 rounded-md"
    //       />
    //     </div>
    //     <button
    //       type="button"
    //       onClick=""
    //       className="bg-green-500 text-white px-4 py-2 rounded-md"
    //     >
    //       Register
    //     </button>
    //   </form>
    // </div>
    <div
      className="bg-white-buram h-full flex items-center justify-center"
      id="kotak-tengah">
      <div className="bg-white-apik my-7 w-3/4 h-3/4 rounded-xl grid grid-cols-2">
        <div className="col-span-1">
          <div className="flex items-center justify-center mt-16" onClick={() => navigate('')}>
            <img src="" alt="Logo" className="w-10 h-10 mr-2" />
            <span className="font-bold text-xl">Bookstore</span>
          </div>
          <div className="text-center mt-10 font-bold text-4xl">
            Welcome To Bookstore
          </div>
          <div className="flex items-center justify-center mt-10">
            <p class="font-bold text-2xl text-[#002D74] ">Sign Up</p>
          </div>
          <div className="flex items-center justify-center mb-5">
            <p class="text-xs mt-4 text-[#002D74]">
              If you are already a member, easily log in
            </p>
          </div>
          <div>
            <form
              action="" onSubmit={prosesSignUp}
              class="gap-4 grid grid-rows-3 items-center justify-center">
              <div className="row-span-1 hover:scale-105 duration-300">
                <input
                  class="w-64 p-2 rounded-xl border"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={e=>usernameChange(e.target.value)}
                />
              </div>
              <div className="row-span-1 hover:scale-105 duration-300">
                <input
                  class="w-64 p-2 rounded-xl border"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={e=>emailChange(e.target.value)}
                />
              </div>
              <div className="row-span-1 hover:scale-105 duration-300">
                <input
                  class="w-64 p-2 rounded-xl border"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={e=>passwordChange(e.target.value)}
                />
              </div>
              <div class="row-span-1 hover:scale-105 duration-400" 
              // onClick={() => navigate('/login')}
              >
                <button class="w-64 bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;
