import { Send } from "lucide-react";
import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full h-fit px-8 md:px-12 lg:px-24 py-16 mt-12 flex flex-col gap-10 bg-blue-800 md:flex-row md:justify-between">
      <h2 className="text-3xl text-white font-bold font-inknut text-center md:text-3xl lg:text-5xl lg:w-1/2">
        Subscribe to our Newsletter
      </h2>

      <form className="flex items-center gap-4 border border-white rounded px-4 md:w-1/2 md:h-fit md:my-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1  py-2 border-0 outline-0  text-white placeholder:text-white"
        />
        <Send className="text-yellow-500" />
      </form>
    </section>
  );
};

export default Newsletter;
