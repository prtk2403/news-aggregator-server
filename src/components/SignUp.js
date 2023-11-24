import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export function SignUp() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [register,setRegister]=useState(false);
    const URL1 = "https://news-one-server.vercel.app//api/users/register";
    const userregister = async ()=>{
        try {
          const payload = {
            email,password,name
          }
          await axios.post(URL1,payload)
          toast("Registration Successful" , "success")
          setRegister(false)
        } catch (error) {
          toast("Something Went Wrong " , "error")
        }
      }
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center items-center">
          <span>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <path d="M 7.5 6 C 5.019 6 3 8.019 3 10.5 L 3 35.5 C 3 39.084 5.916 42 9.5 42 L 38.5 42 C 42.084 42 45 39.084 45 35.5 L 45 18.5 C 45 16.19 43.244 14.302781 41 14.050781 L 41 34.5 C 41 35.328 40.328 36 39.5 36 C 38.672 36 38 35.328 38 34.5 L 38 10.5 C 38 8.019 35.981 6 33.5 6 L 7.5 6 z M 10.5 15 L 30.5 15 C 31.329 15 32 15.672 32 16.5 C 32 17.328 31.329 18 30.5 18 L 10.5 18 C 9.671 18 9 17.328 9 16.5 C 9 15.672 9.671 15 10.5 15 z M 10.5 23 L 17.5 23 C 18.329 23 19 23.672 19 24.5 L 19 31.5 C 19 32.328 18.329 33 17.5 33 L 10.5 33 C 9.671 33 9 32.328 9 31.5 L 9 24.5 C 9 23.672 9.671 23 10.5 23 z M 23.5 23 L 30.5 23 C 31.329 23 32 23.672 32 24.5 C 32 25.328 31.329 26 30.5 26 L 23.5 26 C 22.671 26 22 25.328 22 24.5 C 22 23.672 22.671 23 23.5 23 z M 12 26 L 12 30 L 16 30 L 16 26 L 12 26 z M 23.5 30 L 30.5 30 C 31.329 30 32 30.672 32 31.5 C 32 32.328 31.329 33 30.5 33 L 23.5 33 C 22.671 33 22 32.328 22 31.5 C 22 30.672 22.671 30 23.5 30 z"></path>
        </svg>
          </span>
          <span className="font-bold text-2xl"><a href="/home">NewsOne</a></span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create account
          </h2>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Full Name{" "}
                </label>
                <div className="mt-2">
                  <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                  ></input>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  {" "}
                  Email address{" "}
                </label>
                <div className="mt-2">
                  <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button" onClick={userregister}
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
