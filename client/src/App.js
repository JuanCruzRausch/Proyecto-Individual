import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./components/Landing";
import Home from './components/Home';
import Detail from './components/Detail';
import CreatingActivity from './components/CreatingActivity';
import CreatingCountry from './components/CreatingCountry';
import EditCountry from './components/EditCountry';
import AddActivitiesEdit from './components/AddActivitiesEdit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/activity" element={<CreatingActivity />} />
        <Route exact path="/country" element={<CreatingCountry />} />
        <Route exact path="/edit/:id" element={<EditCountry />} />
        <Route exact path="/addact/:id" element={<AddActivitiesEdit />} />
      </Routes>
    </div>
  );
}

export default App;
