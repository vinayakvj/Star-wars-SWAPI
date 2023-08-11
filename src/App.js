
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Planets from './pages/Planets';
import SpaceShips from './pages/SpaceShips';
import Peoples from './pages/Peoples';
import Vehicles from './pages/Vehicle';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />

        <Route path='/Planets' element={<Planets />} />
        <Route path='/SpaceShips' element={<SpaceShips />} />
        <Route path='/People' element={<Peoples />} />
        <Route path='/Vehicle' element={<Vehicles />} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
