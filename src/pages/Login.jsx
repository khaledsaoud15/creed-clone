import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAction } from "../hooks/useAction";

const Login = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { mutate } = useAction("/auth/login", "post", "user");

  const handleInputs = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    mutate(inputs);
    navigate("/");
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3000/api/v1/auth/google";
  };

  useEffect(() => {
    if (!loading && user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="flex flex-col h-fit py-8 absolute top-1/2 left-1/2 -translate-1/2 w-full  px-8 gap-6 md:w-1/3">
        <div className="space-y-2">
          <h1 className="text-3xl font-inknut font-bold">Welcome back!</h1>
          <span className="text-gray-500">Please verify your information</span>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-2">
            <h4 className="font-medium text-base">Email:</h4>
            <div className="w-full rounded border border-gray-500 flex items-center justify-between px-4">
              <input
                type="email"
                className="py-2 w-4/5 outline-0"
                placeholder="example@mail.com"
                name="email"
                onChange={handleInputs}
              />
              <MdEmail />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-base">Password:</h4>
            <div className="w-full rounded border border-gray-500 flex items-center justify-between px-4">
              <input
                type="password"
                className="py-2 w-4/5 outline-0"
                placeholder="********"
                name="password"
                onChange={handleInputs}
              />
              <IoMdEye />
            </div>
            <span className="text-gray-500 underline">Forgot password?</span>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <button
              onClick={handleLogin}
              className={`w-full py-3 rounded bg-yellow-500 shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium`}
            >
              Log in
            </button>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center gap-2 rounded border shadow-lg justify-center py-3 font-medium cursor-pointer hover:bg-gray-100 active:bg-white active:ring-offset-2 active:ring-2 active:ring-gray-500 active:text-gray-500 bg-white"
            >
              <img
                src="./assets/images/google-icon.png"
                alt="google icon"
                className="w-7 object-cover h-auto"
                loading="lazy"
              />
              Continue with Google
            </button>
            <span className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="font-medium underline text-black">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </div>
      <img
        src="./assets/images/mint@2x.png"
        alt=""
        className="absolute -top-32 -left-36 w-full h-auto object-cover md:w-1/2 md:-top-64"
      />
      <img
        src="./assets/images/jasmine.png"
        alt=""
        className="absolute hidden md:block h-auto object-cover  md:w-1/2 md:-bottom-80 md:-right-50"
      />
      <img
        src="./assets/images/forher.png"
        alt=""
        className="w-1/4 absolute hidden md:block h-auto -bottom-10 -right-0 -rotate-12"
      />
    </section>
  );
};

export default Login;
