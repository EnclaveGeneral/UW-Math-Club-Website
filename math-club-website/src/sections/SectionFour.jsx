import Box from "@mui/material/Box";
import { BorderBottom, BorderLeft, BorderRight, Image } from "@mui/icons-material";
import { Grid, Typography} from "@mui/material";
import jane_street_logo from "../assets/jane_street_logo.png";

export default function SectionFour() {
    return (
        <Box sx={{ backgroundColor: '#ffffff', alignItems: 'center', textAlign: 'center', paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 4, sm: 6, md: 8}, 
                    borderLeft: 5, borderRight: 5, borderBottom: 5, borderColor: '#32006e', borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
            <Typography variant="h3" sx={{ color: '#32006e' }}>
                Our Sponsors: 
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems={"center"} sx={{mt: {xs: 6, sm: 8, md: 10}}}>
                <Grid textAlign="center" justifyContent="center"> 
                    <img src={jane_street_logo} style={{ width: "20%" }}/>
                </Grid>
            </Grid>
        </Box>
    )
}