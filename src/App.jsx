import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import Reptiles from './pages/Reptiles/index.jsx';
import Mammals from './pages/Mammals/index.jsx';
import Birds from './pages/Birds/index.jsx';
import Layout from './pages/Layout/index.jsx';
import './App.css';

function App() {
  return (
    <>
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Mammals" element={<Mammals />}></Route>
          <Route path="/Birds" element={<Birds />}></Route>
          <Route path="/Reptiles" element={<Reptiles />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
