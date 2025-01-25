import React from "react";
import Logo from './../../../assets/logo.png';
import { useLocation } from "react-router-dom";

const SignUpForm = () => {
    const location = useLocation();
    const email = location.state?.email || "";
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl p-8">
        <div className="flex justify-center mb-6">
          <img
            src={Logo}
            alt="Hexnode Logo"
            className="h-12"
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          A confirmation code has been sent to you
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Please enter the six-digit code you received at{" "}
          <span className="font-medium text-gray-800">{email}</span>
        </p>

        <form className="space-y-4">
          <div className="flex gap-2 justify-center">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              ))}
          </div>
          <p className="text-sm text-gray-500 text-center">
            Haven't received the confirmation code?{" "}
            <button
              type="button"
              className="text-blue-500 hover:underline font-medium"
            >
              Resend
            </button>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <input
                type="text"
                placeholder="Portal Name"
                className="flex-grow p-3 focus:outline-none"
              />
              <span className="px-3 text-gray-500 bg-gray-100 rounded-r-md">
                .hexnodemdm.com
              </span>
            </div>
            <input
              type="email"
              placeholder="Username"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              defaultValue={email}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              defaultValue="15 - 25"
            >
              <option>1 - 10</option>
              <option>11 - 20</option>
              <option>15 - 25</option>
              <option>25+</option>
            </select>
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2">
            {/* <img
              src="path-to-germany-flag.png"
              alt="Germany Flag"
              className="h-6 w-6"
            /> */}
            <select className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
              <option>Frankfurt</option>
              <option>Singapore</option>
              <option>USA</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="agreement" className="w-4 h-4" />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              I have read and agree to Hexnode UEM{" "}
              <a href="/" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/" className="text-blue-500 hover:underline">
                SaaS Agreement
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
          >
            CREATE MY TRIAL
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
