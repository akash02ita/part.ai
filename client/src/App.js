import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Create from './components/Create';
import Search from './components/Search';
import Event from './components/Event';
import Contacts from "./components/Contacts";
import Saved from "./components/Saved";
import { SharedLayout } from "./components";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/search/:id" element={<Event />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
