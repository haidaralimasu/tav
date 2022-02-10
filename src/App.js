import './App.css';
import Homepage from './pages/Homepage';
import Burningpage from './pages/Burningpage';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Mintpage from './pages/Mintpage';
import Whitelistpage from './pages/Whitelistpage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/burn" element={<Burningpage />} />
        <Route path="/mint" element={<Mintpage />} />
        <Route path="/whitlist" element={<Whitelistpage />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
