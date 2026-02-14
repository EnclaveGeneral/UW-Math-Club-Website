import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#D4D4FF" }}>
        <Toolbar>
          <Box
            component="img"
            src="../../../assets/club_logo.png"
            alt="Math Club Logo"
            sx={{ height: 40, marginRight: 2 }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#4b2e83" }}>
            Husky Math Club 
          </Typography>
          <Button sx={{ color: "#000000", fontWeight: "Bold"}}>Home</Button>
          <Button sx={{ color: "#000000", fontWeight: "Bold" }}>Officer</Button>
          <Button sx={{ color: "#000000", fontWeight: "Bold" }}>Calendar</Button>
          <Button sx={{ color: "#000000", fontWeight: "Bold" }}>Join</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}