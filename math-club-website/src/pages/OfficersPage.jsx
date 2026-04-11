import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// To adjust the list of current, active officers, please simply manage this array following the pre-defined format as demonstrated, the 
// website will reflect all changes, ensure that all picture or media assets are inside the /assets folder in the upper level directory 
// of this project. 
const current_officers = [
    {name: "Richard Zhang", 
     position: "Lead Software Developer", 
     major: "HCDE", 
     bio: "Stock and Options fan, also 1/8 and 1/18 Diecast Models!", 
     photo: "../../assets/richard_zhang_pic.jpg" }
    ,
    {name: "Richard Zhang", 
     position: "Lead Software Developer", 
     major: "HCDE", 
     bio: "Stock and Options fan, also 1/8 and 1/18 Diecast Models!", 
     photo: "../../assets/richard_zhang_pic.jpg"
    }
    ,
    {name: "Richard Zhang", 
     position: "Lead Software Developer", 
     major: "HCDE", 
     bio: "Stock and Options fan, also 1/8 and 1/18 Diecast Models!", 
     photo: "../../assets/richard_zhang_pic.jpg"
    }
    ,
]


// If an officer has graduated / no longer active, please simply move them to the list of past-officers so that they will still be displayed 
// if deemed important, and delete their entry in the current_officers list 
const past_officers = [
    {name: "Richard Zhang", 
     position: "Lead Software Developer", 
     major: "HCDE", 
     bio: "Stock and Options fan, also 1/8 and 1/18 Diecast Models!", 
     photo: "../../assets/richard_zhang_pic.jpg" 
    }
    ,
    {

    }
    ,
    {

    }
    ,
    {

    }
    ,
]

export default function HomePage() {
    return (
        <Box sx={{ backgroundColor: '#4b2e83', alignItems: 'center', textAlign: "center", paddingX: {xs: 4, sm: 6, md: 8}, paddingY: {xs: 6, sm: 8, md: 10} }}>
            <Typography variant="h4" sx={{ color: "#ffffff" }}>
                Leadership Roles 
            </Typography>

            <Typography variant="h5" sx={{ color: "#ffffff", mt: {xs: 2, sm: 4, md: 6}}}>
                UW Husky Math Club have a variety of officers who server in various positions, from the president who manages the activities, directions, 
                and the health of the club, to treasurer who mananges and monitors the club's finances, to officers who are our external communications 
                to arrange for activities and math talks, to lead website dev who built and manages this site so that it stays relevant, easy to use, and 
                is updated to reflect current situation. 
            </Typography>

            <Typography variant="h4" sx={{ color: "#ffffff" , mt: {xs: 4, sm: 6, md: 8}}}>
                Current Officers: 
            </Typography>

            <Grid container spacing={2} justifyContent={"center"} alignItems={"center"} sx={{mt: {xs: 2, sm: 4, md: 6}}}>
                {current_officers.map((officer, index) => (
                    <Grid size={4} key={index} textAlign={"center"}>
                        <Box component={"img"} src={officer.photo} sx={{ width:"50%", height:"25%", objectFit: "cover", borderRadius: 2}}/>

                        <Typography variant="h6" sx={{ color: "#ffffff", mt: 1 }}>
                            {officer.name}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#ffffff"}}>
                            {"Major: " + officer.major}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#b7a57a" }}>  {/* gold accent */}
                            {officer.position}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#ffffff", mt: 0.5 }}>
                            {"Bio: " + officer.bio}
                        </Typography>

                        
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" sx={{ color: "#ffffff" , mt: {xs: 4, sm: 6, md: 8}}}>
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