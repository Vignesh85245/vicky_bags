import React from "react";

const Login = () => {
  return (
    <section className="min-h-screen min-w-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md px-6">
        {/* Title */}
        <h1 className="text-black text-center text-3xl font-semibold mb-10">Login</h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-widest uppercase mb-2 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="text-black w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email address"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="text-xs font-semibold tracking-widest uppercase text-gray-600"
              >
                Password
              </label>
              <a href="#!" className="!text-gray-500 text-sm hover:underline">
                Forgot?
              </a>
            </div>
            <input
              type="password"
              id="password"
              required
              className="text-black w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-medium hover:bg-opacity-80 transition-opacity"
          >
            Sign In
          </button>
        </form>

        {/* Create Account */}
        <div className="mt-8">
          <a href="#!" className="!text-gray-500 text-sm hover:underline">
            Create Account
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
