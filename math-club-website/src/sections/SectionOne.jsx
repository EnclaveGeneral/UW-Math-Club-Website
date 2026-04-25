import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useState } from "react";
import Game2048 from "../components/2048";
import club_logo from "../assets/club_logo.png";

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
                        src={club_logo}
                        alt="Math Club Interactive Component"
                        width={"75%"}
                        onClick={handleLogoClick}
                        sx={{
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                filter: "drop-shadow(0 0 10px #6a00ff)",
                                animation: "pulse 1s infinite",
                            },
                            "@keyframes pulse": {
                                "0%": { filter: "drop-shadow(0 0 5px #6a00ff)" },
                                "50%": { filter: "drop-shadow(0 0 20px #a855f7)" },
                                "100%": { filter: "drop-shadow(0 0 5px #6a00ff)" },
                            },
                        }}                                      >
                    </Box>
                </Grid>
                <Grid size={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Game2048 />
                </Grid>
            </Grid>
        </Box>
    )
}