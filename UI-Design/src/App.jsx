import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Social from './components/Social/Social';
import Games from './components/Games/Games';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/games" element={<Games />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
