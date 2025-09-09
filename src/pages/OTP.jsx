import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { url } from "../utils/baseUrl";
import { useLocation, useNavigate } from "react-router-dom";

const OTP = () => {
  const [otpValue, setOtp] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const email = location.state?.email || "";

  const queryClient = useQueryClient();
  console.log(user);

  const mutation = useMutation({
    mutationFn: async (data) => {
      await url.post("/auth/verify-otp", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    },
    onError: (error) => {
      console.error("Error verifying OTP:", error);
      setError(true);
      setSuccess(false);
    },
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, otp: otpValue });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden ">
      <div className="absolute top-1/2 left-1/2 -translate-1/2 rounded bg-gray-100 shadow flex flex-col gap-4 w-4/5 py-3 px-4 md:w-1/2">
        <div className="space-y-1">
          <h1 className="text-xl font-medium font-inknut">Enter OTP</h1>
          <p className="text-gray-600">
            A verification code has been sent to your email: {email}
          </p>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <input
            type="text"
            className="border bg-white rounded p-2 outline-none border-gray-300 md:w-4/5"
            placeholder="One Time Password"
            onChange={(e) => setOtp(e.target.value)}
          />
          {error && (
            <p className="text-red-500">Invalid OTP. Please try again.</p>
          )}
          {success && (
            <p className="text-green-500">OTP verified successfully!</p>
          )}
          <button
            onClick={handleSubmit}
            className="rounded bg-yellow-500  shadow-lg cursor-pointer hover:bg-yellow-300 active:bg-white active:ring-offset-2 active:ring-2 active:ring-yellow-500 active:text-yellow-500 font-medium py-2 md:w-1/5"
          >
            Verify
          </button>
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

export default OTP;
