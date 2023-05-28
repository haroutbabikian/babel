import React, { useState } from "react";
import babel from "../images/babel.png";
import { Link } from "react-router-dom";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic
    // If login is successful, update the isLoggedIn state to true
    setIsLoggedIn(true);
    // Close the login form
    setIsLoginFormOpen(false);
  };

  const handleLogout = async () => {
    // Perform logout logic
    try {
      // Send the PUT request to the login API endpoint
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
      });

      if (response.ok) {
        // Once the user is logged out, update the isLoggedIn state to false
        setIsLoggedIn(false);
        console.log("Logout successful");
        // Close the login form
      } else {
        // Logout failed, handle the error
        // You can display an error message or perform any other actions
        console.log("Logout failed");
      }
    } catch (error) {
      // Handle any network or API errors
      console.log("Error occurred:", error);
    }
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    // Create a request body object with the email and password
    const requestBody = {
      email,
      password,
    };

    try {
      // Send the PUT request to the login API endpoint
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Login successful, update the isLoggedIn state
        setIsLoggedIn(true);
        console.log("Login successful");
        // Close the login form
        setIsLoginFormOpen(false);
      } else {
        // Login failed, handle the error
        // You can display an error message or perform any other actions
        console.log("Login failed");
      }
    } catch (error) {
      // Handle any network or API errors
      console.log("Error occurred:", error);
    }
  };

  return (
    <>
      <div>
        <div className="flex items-end justify-between bg-white">
          <div>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="pl-2 sm:text-md md:text-xl text-gray-800"
              >
                تسجيل الخروج
              </button>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginFormOpen(true)}
                  className="pl-2 sm:text-md md:text-xl text-gray-800"
                >
                  تسجيل الدخول
                </button>
                {isLoginFormOpen && (
                  <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-500 bg-opacity-75 z-40">
                    <div className="bg-white p-4">
                      <h2 className="text-xl font-bold mb-4">تسجيل الدخول</h2>
                      <form onSubmit={handleLoginFormSubmit}>
                        <div className="mb-4">
                          <label htmlFor="email" className="block mb-2 text-sm">
                            بريدك الالكتروني
                          </label>
                          <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-400 p-2 w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm"
                          >
                            كلمة المرور
                          </label>
                          <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-400 p-2 w-full"
                          />
                        </div>
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                          تسجيل الدخول
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="mx-auto max-w-sm relative">
            <img
              src={babel}
              alt="Babel logo"
              className="mx-auto h-32 sm:h-40"
            />
            <h1 className="hidden sm:inline-block absolute bottom-0 right-10 w-full mt-2 md:text-xl text-green-800">
              الاخبار المحلية
            </h1>
          </div>
          <div className="w-20"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
