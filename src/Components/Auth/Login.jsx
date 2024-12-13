import { useState } from "react";

function Login({handleLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
        
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-700 ">
      <div className="border border-gray-300 shadow-lg p-10 rounded-xl bg-gray-100 w-96 ">
        <h1 className="text-2xl font-bold text-emerald-600 mb-6 text-center">Login</h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-4 text-left"
        >
          <label className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700">Email:</span>
            <input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="text-black mt-1 outline-none bg-gray-100 border border-gray-300 py-2 px-4 text-lg rounded-lg 
                focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
              placeholder="Enter Your Email"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-lg font-semibold text-gray-700 ">Password:</span>
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="text-black mt-1 outline-none bg-gray-100 border border-gray-300 py-2 px-4 text-lg rounded-lg 
                focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200"
              placeholder="Enter Your Password"
            />
          </label>
          <button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-emerald-700 py-3 px-6 text-lg font-semibold rounded-lg 
              shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
