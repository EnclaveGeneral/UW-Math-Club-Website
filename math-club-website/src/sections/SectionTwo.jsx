import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import event_1_pic from "../assets/example_event_1.jpg";
import event_2_pic from "../assets/example_event_2.jpg";
import event_3_pic from "../assets/example_event_3.jpg";
import integration_bee_1 from "../assets/integration_bee_1.jpg";
import integration_bee_2 from "../assets/integration_bee_2.jpg";
import integration_bee_3 from "../assets/integration_bee_3.jpg";
import integration_bee_4 from "../assets/integration_bee_4.jpg";

export default function SectionTwo() {
    return (
        <Box sx={{ backgroundColor: '#32006e', alignItems: 'center', textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 6, sm: 8, md: 10} }}>
            <Typography variant="h3" sx={{ fontSize: "clamp(1.75rem, 4.25vw, 3.75rem)", color: "#ffffff" }}>
                About UW Husky Math Club
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "clamp(0.10rem, 2.0vw, 1.75rem)", color: "#ffffff", mt: {xs: 4, sm: 6, md: 8}}}>
                UW Husky Math Club is a UW registered student organization (RSO) that 
                is dedicated to the promotion of interest around Mathematics, Computational Mathematics, 
                Applied Mathematics, and Computer algorithm related fields and study. We hold quarterly events
                on major application, integration bee, estimathon, trivia, and many more exciting events! 
            </Typography>
            <Typography variant="h5" sx={{ fontSize: "clamp(0.50rem, 2.50vw, 2.50rem)", color: "#ffffff", mt: {xs: 4, sm: 6, md: 8}}}>
                Here are some fliers from our past events:
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems={"center"} sx={{mt: {xs: 3, sm: 4, md: 5}}}>
                <Grid size={4} textAlign={"center"}>
                    <img src={event_1_pic} style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 1.50vw, 1.50rem)", color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Husky Math Talk Event</Typography>
                </Grid>

                 <Grid size={4} textAlign={"center"}>
                    <img src={event_2_pic} style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 1.50vw, 1.50rem)", color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Husky Estimathon Event</Typography>
                </Grid>

                 <Grid size={4} textAlign={"center"}>
                    <img src={event_3_pic} style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 1.50vw, 1.50rem)", color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Annual Integration Bee</Typography>
                </Grid>

            </Grid>

            <Typography variant="h5" sx={{ fontSize: "clamp(0.75rem, 2.75vw, 2.25rem)", color: "#ffffff", mt: {xs: 4, sm: 6, md: 8}}}>
                Congratulations To Our Previous Integration Bee Event Winners!
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems={"center"} sx={{mt: {xs: 3, sm: 4, md: 5}}}>

                <Grid size={6} textAlign={"center"}>
                    <img src={integration_bee_1} style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 1.50vw, 1.50rem)", color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>First Place</Typography>
                </Grid>

                

                <Grid size={6} textAlign={"center"}>
                    <img src={integration_bee_3} style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 1.50vw, 1.50rem)", color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>First + Second Place</Typography>
                </Grid>

                
                
            </Grid>

        </Box>
    )
}