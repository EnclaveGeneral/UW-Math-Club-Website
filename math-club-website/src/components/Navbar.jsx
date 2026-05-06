import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import club_logo from "../assets/club_logo.png";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: "#D4D4FF", paddingY: {xs: 0.25, sm: 0.75, md: 1.25} }}>
        <Toolbar>
          <Box
            component="img"
            src={club_logo}
            alt="Math Club Logo"
            sx={{ width: "clamp(50px, 15%, 800px)", height: 'auto', marginRight: 2 }}
          />
          <Typography variant="h4" component="div" sx={{ fontSize: "clamp(1rem, 3vw, 2.50rem)", flexGrow: 1, color: "#4b2e83" }}>
            Husky Math Club 
          </Typography>

          <Button variant="contained" component={Link} to="/" sx={{ minWidth: 0, color: "#ffffff", fontWeight: "Bold", fontSize: "clamp(0.25rem, 1.25vw, 1.5rem)", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Home</Button>
          <Button variant="contained" component={Link} to="/officers" sx={{ minWidth: 0, color: "#ffffff", fontWeight: "Bold", fontSize: "clamp(0.25rem, 1.25vw, 1.5rem)", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Leadership</Button>
          <Button variant="contained" component={Link} to="/calendar" sx={{ minWidth: 0, color: "#ffffff", fontWeight: "Bold", fontSize: "clamp(0.25rem, 1.25vw, 1.5rem)", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Calendar</Button>
          <Button variant="contained" component={Link} to="/join" sx={{ minWidth: 0, color: "#ffffff", fontWeight: "Bold", fontSize: "clamp(0.25rem, 1.25vw, 1.5rem)", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Join</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}