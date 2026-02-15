import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useState } from "react";
import Game2048 from "./2048";

export default function SectionOne() {

    const[spin, setSpin] = useState(false);

    const handleLogoClick = () => {
        if (spin) return;
        setSpin(true);

        setTimeout(() => {
            setSpin(false);
        }, 700);
    };


    return (
        <Box  sx={{ backgroundColor: '#FAE1FA'}}> 
            <Grid container spacing={2} alignItems={"center"}>
                <Grid size={6} display="flex" justifyContent="center" alignItems="center">
                    <Box
                        component="img"
                        src="../../../assets/club_logo.png"
                        alt="Math Club Interactive Component"
                        onClick={handleLogoClick}
                        sx={{
                            transformOrigin: "center",
                            transition: "transform 0.7s ease-in-out",
                            transform: spin ? "rotate(360deg)" : "rotate(0deg)",
                        }}
                    >
                    </Box>
                </Grid>
                <Grid size={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Game2048 />
                </Grid>
            </Grid>
        </Box>
    )
}