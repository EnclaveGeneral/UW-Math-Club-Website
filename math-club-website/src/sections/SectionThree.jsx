import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import insta_icon from "../assets/instagram_icon.png";
import discord_icon from "../assets/discord_icon.png";

export default function SectionThree() {
    return (
        <Box sx={{ backgroundColor: '#32006e', alignItems: "center", textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 4, sm: 6, md: 8},
                   borderTop: 5, borderColor: '#ffffff'}}>
            <Typography variant="h3" sx={{ fontSize: "clamp(1.75rem, 4.25vw, 3.75rem)", color: '#ffffff' }}>
                Get In Touch With Us! 
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, mt: {xs: 2, sm: 4, md: 6}}}>
    
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <img src={insta_icon} style={{ width: "10%" }}></img>
                    <Typography component="a" href="https://www.instagram.com/huskymathclub/" target="_blank" variant="h4" sx={{ fontSize: "clamp(0.25rem, 2.75vw, 2.5rem)", color: '#ffffff' }}>
                        Follow Us On Instagram!
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <img src={discord_icon} style={{ width: "10%" }}></img>
                    <Typography component="a" href="https://discord.gg/9XTNNZKreC" target="_blank" variant="h4" sx={{ fontSize: "clamp(0.25rem, 2.75vw, 2.5rem)", color: '#ffffff' }}>
                        Join Our Discord Server!
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}