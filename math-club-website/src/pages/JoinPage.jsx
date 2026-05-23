import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import insta_icon from "../assets/instagram_icon.png";
import discord_icon from "../assets/discord_icon.png";

// ── Floating math particle data ──────────────────────────────────────────────
const PARTICLES = [
    { sym: "∑", left: "5%",  top: "8%",  size: 2.8, dur: 7,  delay: 0   },
    { sym: "∫", left: "15%", top: "70%", size: 2.2, dur: 9,  delay: 1.2 },
    { sym: "π", left: "25%", top: "20%", size: 3.5, dur: 6,  delay: 0.5 },
    { sym: "√", left: "35%", top: "80%", size: 2.0, dur: 8,  delay: 2.1 },
    { sym: "∞", left: "50%", top: "12%", size: 3.0, dur: 10, delay: 0.8 },
    { sym: "Δ", left: "62%", top: "65%", size: 2.4, dur: 7,  delay: 1.5 },
    { sym: "θ", left: "72%", top: "30%", size: 2.9, dur: 9,  delay: 0.3 },
    { sym: "λ", left: "82%", top: "75%", size: 2.1, dur: 6,  delay: 1.8 },
    { sym: "∂", left: "90%", top: "15%", size: 3.2, dur: 8,  delay: 0.9 },
    { sym: "∇", left: "8%",  top: "45%", size: 2.6, dur: 11, delay: 2.4 },
    { sym: "≈", left: "45%", top: "55%", size: 2.0, dur: 7,  delay: 1.1 },
    { sym: "φ", left: "58%", top: "88%", size: 3.1, dur: 9,  delay: 0.6 },
    { sym: "∀", left: "78%", top: "50%", size: 2.3, dur: 8,  delay: 2.0 },
    { sym: "⊕", left: "20%", top: "90%", size: 2.7, dur: 6,  delay: 1.4 },
    { sym: "∈", left: "93%", top: "60%", size: 2.5, dur: 10, delay: 0.2 },
];

export default function JoinPage() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <Box sx={{
            position: "relative",
            overflow: "hidden",
            background: "radial-gradient(ellipse at 20% 30%, #3d0080 0%, #1a0038 50%, #0d0020 100%)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            paddingX: { xs: 3, sm: 6, md: 10 },
            paddingY: { xs: 6, sm: 8, md: 10 },
            borderTop: 5,
            borderColor: "#b7a57a",
        }}>

            {/* ── Keyframes ────────────────────────────────────────────────── */}
            <style>{`
                @keyframes floatUp {
                    0%   { transform: translateY(0px)   rotate(0deg);  opacity: 0.10; }
                    50%  { opacity: 0.35; }
                    100% { transform: translateY(-40px) rotate(12deg); opacity: 0.10; }
                }
                @keyframes titleShimmer {
                    0%   { background-position: -300% center; }
                    100% { background-position:  300% center; }
                }
                @keyframes fadeSlideUp {
                    0%   { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0);    }
                }
                @keyframes orbPulse {
                    0%, 100% { transform: scale(1);    opacity: 0.55; }
                    50%      { transform: scale(1.18); opacity: 0.80; }
                }
                @keyframes cardGlow {
                    0%, 100% { box-shadow: 0 0 20px rgba(183,165,122,0.25), 0 8px 40px rgba(50,0,110,0.6); }
                    50%      { box-shadow: 0 0 45px rgba(183,165,122,0.60), 0 12px 60px rgba(75,46,131,0.9); }
                }
                @keyframes btnShimmer {
                    0%   { left: -100%; }
                    100% { left:  150%; }
                }
                @keyframes imageFloat {
                    0%, 100% { transform: translateY(0px);   }
                    50%      { transform: translateY(-10px);  }
                }
                .social-card {
                    transition: transform 0.30s cubic-bezier(.34,1.56,.64,1), box-shadow 0.30s ease;
                    animation: cardGlow 3.5s ease-in-out infinite;
                }
                .social-card:hover {
                    transform: translateY(-8px) scale(1.05);
                    box-shadow: 0 0 60px rgba(183,165,122,0.75), 0 16px 70px rgba(75,46,131,1) !important;
                }
                .social-card .shimmer-bar {
                    position: absolute;
                    top: 0; bottom: 0;
                    width: 40%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
                    left: -100%;
                    pointer-events: none;
                }
                .social-card:hover .shimmer-bar {
                    animation: btnShimmer 0.55s ease forwards;
                }
            `}</style>

            {/* ── Floating particles ──────────────────────────────────────── */}
            {PARTICLES.map((p, i) => (
                <Box key={i} component="span" sx={{
                    position: "absolute",
                    left: p.left,
                    top: p.top,
                    fontSize: `clamp(1rem, ${p.size}vw, 4rem)`,
                    color: "rgba(183, 165, 122, 0.22)",
                    fontFamily: "'Georgia', serif",
                    fontWeight: "bold",
                    animation: `floatUp ${p.dur}s ease-in-out infinite alternate`,
                    animationDelay: `${p.delay}s`,
                    userSelect: "none",
                    pointerEvents: "none",
                    zIndex: 0,
                }}>{p.sym}</Box>
            ))}

            {/* ── Background glow orb ─────────────────────────────────────── */}
            <Box sx={{
                position: "absolute",
                top: "0%",
                left: "50%",
                transform: "translateX(-50%)",
                width: { xs: "320px", sm: "500px", md: "700px" },
                height: { xs: "320px", sm: "500px", md: "700px" },
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(100,0,200,0.45) 0%, rgba(75,46,131,0.20) 50%, transparent 75%)",
                animation: "orbPulse 5s ease-in-out infinite",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            {/* ── Hero headline ───────────────────────────────────────────── */}
            <Box sx={{ position: "relative", zIndex: 1, animation: "fadeSlideUp 0.8s ease both" }}>
                <Typography sx={{
                    fontSize: "clamp(0.6rem, 1.4vw, 1rem)",
                    letterSpacing: "0.4em",
                    textTransform: "uppercase",
                    color: "#b7a57a",
                    mb: 1.5,
                    fontFamily: "'Georgia', serif",
                }}>
                    University of Washington
                </Typography>

                <Typography sx={{
                    fontSize: "clamp(2.4rem, 7vw, 6rem)",
                    fontWeight: 900,
                    fontFamily: "'Georgia', serif",
                    lineHeight: 1.0,
                    background: "linear-gradient(110deg, #ffffff 15%, #b7a57a 40%, #ffe8a0 55%, #b7a57a 70%, #ffffff 85%)",
                    backgroundSize: "300% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "titleShimmer 3.5s linear infinite, fadeSlideUp 0.9s ease both",
                    mb: { xs: 2, sm: 3 },
                    textShadow: "none",
                }}>
                    Join Husky Math Club
                </Typography>

                <Typography sx={{
                    fontSize: "clamp(0.85rem, 1.8vw, 1.25rem)",
                    color: "rgba(255,255,255,0.60)",
                    maxWidth: "560px",
                    mx: "auto",
                    mb: { xs: 5, sm: 7, md: 9 },
                    lineHeight: 1.75,
                    animation: "fadeSlideUp 1.1s ease both",
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                }}>
                    Connect with fellow math lovers, compete in events, and be part of something that adds up.
                </Typography>
            </Box>

            {/* ── Social cards ────────────────────────────────────────────── */}
            <Box sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 3, sm: 5 },
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 7, sm: 9, md: 11 },
                animation: "fadeSlideUp 1.3s ease both",
            }}>
                {[
                    {
                        href: "https://www.instagram.com/huskymathclub/",
                        icon: insta_icon,
                        label: "Follow on Instagram",
                        sub: "@huskymathclub",
                        delay: "0s",
                    },
                    {
                        href: "https://discord.gg/9XTNNZKreC",
                        icon: discord_icon,
                        label: "Join our Discord",
                        sub: "discord.gg/9XTNNZKreC",
                        delay: "0.9s",
                    },
                ].map((card) => (
                    <Box
                        key={card.label}
                        component="a"
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 1.5,
                            textDecoration: "none",
                            background: "linear-gradient(145deg, rgba(75,46,131,0.55), rgba(30,0,70,0.70))",
                            border: "1px solid rgba(183,165,122,0.50)",
                            borderRadius: "22px",
                            paddingX: { xs: 5, sm: 6 },
                            paddingY: { xs: 3.5, sm: 4 },
                            backdropFilter: "blur(12px)",
                            minWidth: { xs: "230px", sm: "255px", md: "285px" },
                            animationDelay: card.delay,
                        }}
                    >
                        {/* shimmer sweep on hover */}
                        <span className="shimmer-bar" />

                        <Box component="img" src={card.icon} sx={{
                            width: { xs: "52px", sm: "60px", md: "68px" },
                            height: "auto",
                            filter: "drop-shadow(0 0 10px rgba(183,165,122,0.6))",
                        }} />

                        <Typography sx={{
                            fontSize: "clamp(1rem, 2vw, 1.35rem)",
                            fontWeight: 800,
                            color: "#ffffff",
                            fontFamily: "'Georgia', serif",
                            letterSpacing: "0.04em",
                        }}>
                            {card.label}
                        </Typography>

                        <Typography sx={{
                            fontSize: "clamp(0.70rem, 1.3vw, 0.90rem)",
                            color: "#b7a57a",
                            letterSpacing: "0.10em",
                        }}>
                            {card.sub}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* ── Invite image ─────────────────────────────────────────────── */}
            <Box sx={{
                position: "relative",
                zIndex: 1,
                width: { xs: "95%", sm: "78%", md: "62%" },
                animation: "imageFloat 5s ease-in-out infinite, fadeSlideUp 1.5s ease both",
                border: "1px solid rgba(183,165,122,0.35)",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow: "0 24px 90px rgba(0,0,0,0.65), 0 0 50px rgba(183,165,122,0.18)",
                }}>
            </Box>

            {/* ── Footer tagline ───────────────────────────────────────────── */}
            <Typography sx={{
                position: "relative",
                zIndex: 1,
                mt: { xs: 5, sm: 6, md: 7 },
                fontSize: "clamp(0.60rem, 1.1vw, 0.85rem)",
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontFamily: "'Georgia', serif",
                animation: "fadeSlideUp 1.7s ease both",
            }}>
                Where mathematics meets community · UW Seattle
            </Typography>
        </Box>
    );
}