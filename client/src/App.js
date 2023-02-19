import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Create from './components/Create';
import Search from './components/Search';
import Event from './components/Event';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/create" element= { <Create/> }/>
        <Route path="/search" element= { <Search/> }/>
        <Route path="/search/:name" element= { <Event /> }/>
        <Route path="*" element= { <Navigate to="/search" /> }/>
      </Routes>
    </div>
  );
}

export default App;
