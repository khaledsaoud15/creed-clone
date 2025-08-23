import React from "react";
import { FaUser } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="flex flex-col h-fit py-8 absolute top-1/2 left-1/2 -translate-1/2 w-full  px-8 gap-6 md:w-1/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-inknut font-bold">Create an account</h1>
          <span className="text-gray-500">
            Please fill in your infrormation
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <button className="flex items-center gap-2 rounded border shadow-lg justify-center py-3 font-medium cursor-pointer hover:bg-gray-100 active:bg-white active:ring-offset-2 active:ring-2 active:ring-gray-500 active:text-gray-500 bg-white">
            <img
              src="./assets/images/google-icon.png"
              alt="google icon"
              className="w-7 object-cover h-auto"
              loading="lazy"
            />
            Continue with Google
          </button>
          <div className="space-y-2">
            <h4 className="font-medium text-base">Name*:</h4>
            <div className="w-full rounded border border-gray-500 flex items-center justify-between px-4">
              <input
                type="text"
                className="py-2 w-4/5 outline-0"
                placeholder="John Doe"
              />
              <FaUser />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-base">Email*:</h4>
            <div className="w-full rounded border border-gray-500 flex items-center justify-between px-4">
              <input
                type="email"
                className="py-2 w-4/5 outline-0"
                placeholder="example@mail.com"
              />
              <MdEmail />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-base">Password*:</h4>
            <div className="w-full rounded border border-gray-500 flex items-center justify-between px-4">
              <input
                type="password"
                className="py-2 w-4/5 outline-0"
                placeholder="********"
              />
              <IoMdEye />
            </div>
            <span className="text-gray-500 underline">Forgot password?</span>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button className="w-full py-3 rounded bg-yellow-500  shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium">
              Log in
            </button>

            <span className="text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="font-medium underline text-black">
                Log in
              </Link>
            </span>
          </div>
        </div>
      </div>
      <img
        src="./assets/images/green.png"
        alt=""
        className="absolute hidden md:block h-auto object-cover md:w-1/5 md:-bottom-10 md:-left-15"
      />
      <img
        src="./assets/images/lime.png"
        alt=""
        className="w-full h-auto absolute -top-34 -right-34 object-cover -z-10 md:-top-55 md:w-1/2 md:-right-55"
      />
    </section>
  );
};

export default Register;
