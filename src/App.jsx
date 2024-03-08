import { Route, Routes } from "react-router-dom";
// import { database } from "./data/data";
import "./App.css";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./pages/Home";
import Header from "./layout/header";
import Tasks from "./pages/Tasks";
import Setting from "./pages/Setting";
function App() {
  return (
    <div className="w-full h-screen ">
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
