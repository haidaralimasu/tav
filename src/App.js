import "./App.css";
import Homepage from "./pages/Homepage";
import Burningpage from "./pages/Burningpage";
import { Routes, Route } from "react-router-dom";
import Mintpage from "./pages/Mintpage";
import Whitelistpage from "./pages/Whitelistpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/burn" element={<Burningpage />} />
        <Route path="/mint" element={<Mintpage />} />
        <Route path="/whitelist" element={<Whitelistpage />} />
      </Routes>
    </div>
  );
}

export default App;
