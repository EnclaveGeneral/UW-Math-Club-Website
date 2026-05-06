import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import richard_photo from "../assets/richard_zhang_pic.jpg";
import santosh_photo from "../assets/santosh_pic.png";
import yash_photo from "../assets/yash_pic.png";
import david_photo from "../assets/david_pic.jpg";
import wren_photo from "../assets/wren_pic.jpeg";

// To adjust the list of current, active officers, please simply manage this array following the pre-defined format as demonstrated, the 
// website will reflect all changes, ensure that all picture or media assets are inside the /assets folder in the upper level directory 
// of this project. 
const current_officers = [
    {name: "Richard Zhang", 
     position: "Lead Software Developer", 
     major: "HCDE", 
     bio: "Stock and Options fan, also 1/8 and 1/18 Diecast Models!", 
     photo: richard_photo
    }
    ,
    {name: "Santoshshiva Thirumuruga",
     position: "President",
     major: "Computer Science",
     bio: "Hello. I have been a part of the Husky Math Club since I was a freshman and it has been a huge component of my academic experience. My favorite event would have to be Estimathon that we did Winter 2026.",
     photo: santosh_photo
    }
    ,
    {name: "Yash Solanki",
     position: "General Officer",
     major: "Computer Science",
     bio: "I really like coding and watching F1",
     photo: yash_photo
    }
    ,
    {name: "David Jovnozon",
     position: "General Officer",
     major: "Math and Applied Mathematics",
     bio: "I enjoy algebra, fun projects, and rock climbing. Feel free to reach out at davjavno[at]uw[dot]edu",
     photo: david_photo

    }
    ,
    {name: "Wren Feng",
     position: "General Officer",
     major: "Math and Philosophy",
     bio: ":3c",
     photo: wren_photo
    }
]


// If an officer has graduated / no longer active, please simply move them to the list of past-officers so that they will still be displayed 
// if deemed important, and delete their entry in the current_officers list 
const past_officers = [

]

export default function HomePage() {
    return (
        <Box sx={{ backgroundColor: '#4b2e83', alignItems: 'center', textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 6, sm: 8, md: 10} }}>
            <Typography variant="h4" sx={{ fontSize: "clamp(1.75rem, 4.25vw, 3.75rem)", color: "#ffffff" }}>
                Leadership Roles 
            </Typography>

            <Typography variant="h5" sx={{ fontSize: "clamp(0.15rem, 2.25vw, 1.75rem)", color: "#ffffff", mt: {xs: 2, sm: 4, md: 6}}}>
                UW Husky Math Club have a variety of officers who server in various positions, from the president who manages the activities, directions, 
                and the health of the club, to treasurer who mananges and monitors the club's finances, to officers who are our external communications 
                to arrange for activities and math talks, to lead website dev who built and manages this site so that it stays relevant, easy to use, and 
                is updated to reflect current situation. 
            </Typography>

            <Typography variant="h4" sx={{ fontSize: "clamp(1.25rem, 3.75vw, 3.25rem)", color: "#ffffff" , mt: {xs: 4, sm: 6, md: 8}}}>
                Current Officers: 
            </Typography>

            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{mt: {xs: 2, sm: 4, md: 6}}}>
                {current_officers.map((officer, index) => (
                    <Grid size={4} key={index} textAlign={"center"} sx={{mt: {xs: 1, sm: 2, md: 3}}}>
                        <Box component={"img"} src={officer.photo} sx={{ width:"50%", height:"25%", objectFit: "cover", borderRadius: 2}}/>

                        <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 2.25vw, 1.75rem)", color: "#ffffff", mt: 1 }}>
                            {officer.name}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 2.25vw, 1.75rem)", color: "#ffffff"}}>
                            {"Major: " + officer.major}
                        </Typography>
                        <Typography variant="h6" sx={{ fontSize: "clamp(0.15rem, 2.25vw, 1.75rem)", color: "#b7a57a" }}>  {/* gold accent */}
                            {officer.position}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: "clamp(0.10rem, 2.00vw, 1.50rem)", color: "#ffffff", mt: 0.5 }}>
                            {"Bio: " + officer.bio}
                        </Typography>

                        
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" sx={{ fontSize: "clamp(1.25rem, 3.75vw, 3.25rem)", color: "#ffffff" , mt: {xs: 4, sm: 6, md: 8}}}>
                Former Officers: 
            </Typography>

            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{mt: {xs: 2, sm: 4, md: 6}}}>
                {past_officers.map((officer, index) => (
                    <Grid size={4} key={index} textAlign={"center"}>
                        <Box component={"img"} src={officer.photo} sx={{ width:"50%", height:"25%", objectFit: "cover", borderRadius: 2}}/>

                        <Typography variant="h6" sx={{ color: "#ffffff", mt: 1 }}>
                            {officer.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#ffffff"}}>
                            {"Major: " + officer.major}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#bb943a" }}>  {/* gold accent */}
                            {"Former Position: " + officer.position}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#ffffff", mt: 0.5 }}>
                            {"Bio: " + officer.bio}
                        </Typography>

                        
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}