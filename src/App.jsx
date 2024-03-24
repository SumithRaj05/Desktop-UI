import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Social from './components/Social/Social';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
