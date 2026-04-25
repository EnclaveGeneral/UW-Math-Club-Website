import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import insta_icon from "../../assets/instagram_icon.png";
import discord_icon from "../../assets/discord_icon.png";
import join_us from "../../assets/husky_math_club_invite.svg";

export default function JoinPage() {
    return (
        <Box sx={{ backgroundColor: '#32006e', alignItems: "center", textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 4, sm: 6, md: 8},
                   borderTop: 5, borderColor: '#ffffff'}}>
            
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3, mt: {xs: 1, sm: 2, md: 3}}}>
    
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <img src={insta_icon} style={{ width: "10%" }}></img>
                    <Typography component="a" href="https://www.instagram.com/huskymathclub/" target="_blank" variant="h4" sx={{ color: '#ffffff' }}>
                        Follow Us On Instagram!
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                    <img src={discord_icon} style={{ width: "10%" }}></img>
                    <Typography component="a" href="https://discord.gg/9XTNNZKreC" target="_blank" variant="h4" sx={{ color: '#ffffff' }}>
                        Join Our Discord Server!
                    </Typography>
                </Box>

            </Box>

            <img src={join_us} style={{ width: "75%" }} />
        </Box>
    )
}