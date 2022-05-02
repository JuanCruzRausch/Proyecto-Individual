import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing";
import Home from './components/Home';
import Detail from './components/Detail';
import CreatingActivity from './components/CreatingActivity';
import CreatingCountry from './components/CreatingCountry';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/activity" element={<CreatingActivity />} />
        <Route exact path="/country" element={<CreatingCountry />} />
      </Routes>
    </div>
  );
}

export default App;
