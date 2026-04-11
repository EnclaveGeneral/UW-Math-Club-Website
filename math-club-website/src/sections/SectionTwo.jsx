import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

export default function SectionTwo() {
    return (
        <Box sx={{ backgroundColor: '#32006e', alignItems: 'center', textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 6, sm: 8, md: 10} }}>
            <Typography variant="h3" sx={{ color: "#ffffff" }}>
                About UW Husky Math Club
            </Typography>
            <Typography variant="h5" sx={{ color: "#ffffff", mt: {xs: 4, sm: 6, md: 8}}}>
                UW Husky Math Club is a UW registered student organization (RSO) that 
                is dedicated to the promotion of interest around Mathematics, Computational Mathematics, 
                Applied Mathematics, and Computer algorithm related fields and study. We hold quarterly events
                on major application, integration bee, estimathon, trivia, and many more exciting events! 
            </Typography>
            <Typography variant="h5" sx={{ color: "#ffffff", mt: {xs: 4, sm: 6, md: 8}}}>
                Here are some fliers from our past events:
            </Typography>

            <Grid container spacing={2} justifyContent="center" alignItems={"center"} sx={{mt: {xs: 6, sm: 8, md: 10}}}>
                <Grid size={4} textAlign={"center"}>
                    <img src="../../assets/example_event_1.jpg" style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Husky Math Talk Event</Typography>
                </Grid>

                 <Grid size={4} textAlign={"center"}>
                    <img src="../../assets/example_event_2.jpg" style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Husky Estimathon Event</Typography>
                </Grid>

                 <Grid size={4} textAlign={"center"}>
                    <img src="../../assets/example_event_3.jpg" style={{ width: "75%" }} />
                    <Typography variant="h6" sx={{ color: "#ffffff", fontStyle: "italic", mt: {xs: 0.5, sm: 1.0, md: 1.5}}}>Annual Integration Bee</Typography>
                </Grid>

            </Grid>

        </Box>
    )
}