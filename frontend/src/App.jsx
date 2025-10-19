import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route } from "react-router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex items-center justify-center p-4 h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </div>
  );
}

export default App;
