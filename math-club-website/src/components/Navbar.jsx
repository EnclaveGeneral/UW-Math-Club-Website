import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ bgcolor: "#D4D4FF", paddingY: {xs: 0.25, sm: 0.75, md: 1.25} }}>
        <Toolbar>
          <Box
            component="img"
            src="../../../assets/club_logo.png"
            alt="Math Club Logo"
            sx={{ height: 80, marginRight: 2 }}
          />
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#4b2e83" }}>
            Husky Math Club 
          </Typography>

          <Button variant="contained" href="/" sx={{ color: "#ffffff", fontWeight: "Bold", fontSize: "100%", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Home</Button>
          <Button variant="contained" href="/officers" sx={{ color: "#ffffff", fontWeight: "Bold", fontSize: "100%", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Leadership</Button>
          <Button variant="contained" sx={{ color: "#ffffff", fontWeight: "Bold", fontSize: "100%", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Calendar</Button>
          <Button variant="contained" sx={{ color: "#ffffff", fontWeight: "Bold", fontSize: "100%", backgroundColor: '#4b2e83', marginLeft: {xs: 0.25, sm: 0.75, md: 1.25} }}>Join</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}