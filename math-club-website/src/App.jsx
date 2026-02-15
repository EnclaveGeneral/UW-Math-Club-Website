import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ButtonAppBar from './components/navbar';
import SectionOne from './components/SectionOne';

export default function main() {
  return (
    <div>
      <ButtonAppBar />
      <SectionOne />
    </div>
  );
}