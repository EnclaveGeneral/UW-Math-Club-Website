import AppBar from '@mui/material/AppBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import HomePage from './pages/HomePage';
import OfficersPage from './pages/OfficersPage';
import CalendarPage from './pages/CalendarPage';
import JoinPage from './pages/JoinPage';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/officers" element={<OfficersPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/join" element={<JoinPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}