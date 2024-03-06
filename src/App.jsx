import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import { database } from "./data/data";
function App() {
  const users = database.users[0];
  console.log(users);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home users={users} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
