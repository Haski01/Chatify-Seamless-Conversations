import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // console.log(username, password);

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault(); // if we dont use this it gonna refresh the page

    // custom hook to login user
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center  min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md  bg-gray-900 bg-clip-padding  backdrop-filter backdrop-blur-sm bg-opacity-50 border">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> Chatify</span>
        </h1>

        <form onSubmit={handleSubmit}>
          {/* username field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="input input-bordered w-full h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* password field */}
          <div>
            <label className="label mt-3">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="input input-bordered w-full h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* signup link */}
          <Link
            to="/signup"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>

          {/* login button */}
          <div>
            <button
              className="btn btn-block btn-sm mt-2 border border-slate-700"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner" /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
