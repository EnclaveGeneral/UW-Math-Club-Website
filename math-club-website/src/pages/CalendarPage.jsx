import { Box, Typography } from "@mui/material";

const CALENDAR_EMBED_SRC =
  "https://calendar.google.com/calendar/embed?src=6ef0f9c4834734010fa53b6651a6dde975749b889c92535ea1948f93a6671ddd%40group.calendar.google.com&ctz=America%2FLos_Angeles";

export default function HomePage() {
    return (
        <div>
            <Box py={4}>
                <Typography variant="h4" gutterBottom align="center">
                    Upcoming Events
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 900,
                        mx: "auto",
                        mt: 3,
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: 1,
                    }}
                >
                    <iframe
                        src={CALENDAR_EMBED_SRC}
                        style={{ border: 0, width: "100%", height: "600px" }}
                        frameBorder="0"
                        scrolling="no"
                        title="Husky Math Club Calendar"
                    />
                </Box>
            </Box>
        </div>
    )
}
