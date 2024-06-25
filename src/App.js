import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/computadoras" element={<Home />}/>
          <Route path="/electronicos" element={<Home />}/>
          <Route path="/videojuegos" element={<Home />}/>
          <Route path="/juguetes" element={<Home />}/>
          <Route path="/herramientas" element={<Home />}/>
        </Routes>
    </div>
  );
}

export default App;
