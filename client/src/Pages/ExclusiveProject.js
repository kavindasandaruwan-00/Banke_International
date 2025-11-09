import React, { useState } from "react";
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, IconButton } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Exclusive1 from "../Images/Exclusive1.png"
import Exclusive2 from "../Images/Exclusive2.png"
import Exclusive3 from "../Images/Exclusive3.png"
import Home8 from '../Images/Home8.png';

const testimonials = [
    {
        rating: 5,
        comment: "Banke Capital made my investment journey seamless and rewarding.",
        name: "John Doe",
        designation: "Investor",
    },
    {
        rating: 5,
        comment: "Highly professional team and excellent support throughout the process.",
        name: "Jane Smith",
        designation: "Entrepreneur",
    },
    {
        rating: 5,
        comment: "Their expertise helped me secure the best properties with confidence.",
        name: "Michael Lee",
        designation: "Business Owner",
    },
    {
        rating: 5,
        comment: "Banke Capital made my investment journey seamless and rewarding.",
        name: "John Doe",
        designation: "Investor",
    },
    {
        rating: 5,
        comment: "Highly professional team and excellent support throughout the process.",
        name: "Jane Smith",
        designation: "Entrepreneur",
    },
    {
        rating: 5,
        comment: "Their expertise helped me secure the best properties with confidence.",
        name: "Michael Lee",
        designation: "Business Owner",
    },
];

export default function ExclusiveProject() {
    const projects = [
        {
            image: Exclusive2,
            title: "Skyhills Residences 3",
            developer: "HRE Development",
            location: "Jumeirah Village",
            price: "AED 1.2M",
            description:
                "Skyhills Residences 3 at JVC is a premium rise of towering building structure being launched by HRE Development, establishing a new standard with studios, 1, 2 & 3-bedroom apartments in Dubai.",
        },
        {
            image: Exclusive3,
            title: "THE HARMONY",
            developer: "AL Mizan ",
            location: "Dubai South",
            price: "AED 1.2M",
            description:
                "A modern architectural marvel in the heart of Business Bay. Designed for professionals who value luxury and convenience. Offering panoramic city views and premium amenities.",
        },
        {
            image: Exclusive2,
            title: "Skyhills Residences 3",
            developer: "HRE Development  ",
            location: "Jumeirah Village",
            price: "AED 2.1M",
            description:
                "Located at the heart of Dubai, Skyhills Tower offers ultra-luxury apartments with world-class amenities and easy access to iconic landmarks and business hubs.",
        },
        {
            image: Exclusive3,
            title: "Skyline Views",
            developer: "HRE Development",
            location: "Dubai Marina",
            price: "AED 1.8M",
            description:
                "A waterfront residential tower offering stunning marina views, vibrant lifestyle options, and modern interiors designed for comfort and elegance.",
        },
        {
            image: Exclusive2,
            title: "Elite Residences",
            developer: "HRE Development",
            location: "Palm Jumeirah",
            price: "AED 3.0M",
            description:
                "The epitome of luxury living on Palm Jumeirah, featuring spacious apartments, private beach access, and an exclusive community experience.",
        },
        {
            image: Exclusive3,
            title: "Metro Heights",
            developer: "HRE Development",
            location: "Al Barsha",
            price: "AED 950K",
            description:
                "A contemporary residential building located near the metro, combining convenience, affordability, and modern design for urban professionals.",
        },
    ];

    const [expanded, setExpanded] = useState(Array(projects.length).fill(false));

    const handleToggle = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 >= 0 ? prev - 1 : testimonials.length - 3));
    };

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1 <= testimonials.length - 3 ? prev + 1 : 0));
    };

    return (
        <>
            <Box sx={{ position: "relative", width: "100%", height: "750px", overflow: "hidden" }}>
                <Box
                    component="img"
                    src={Exclusive1}
                    alt="Exclusive Project"
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        top: 0,
                        left: 0,
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        bgcolor: "black",
                        opacity: 0.6,
                        top: 0,
                        left: 0,
                    }}
                />
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        color: "white",
                        pl: 16
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        Signature Developments, <br />
                        Only Accessible Through Banke
                    </Typography>
                    <Typography sx={{ mt: 2, fontSize: 18, maxWidth: 700, textAlign: "left" }}>
                        Discover luxury-driven residential and premium commercial projects <br />
                        curated exclusively for Banke clients. Access off-market launches, limited-<br />
                        release opportunities, and priority sales—crafted for those who seek value,<br />
                        design, and strategic investment.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    bottom: -80,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    zIndex: 3,
                    gap: 8,
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                        px: 6,
                        py: 2,
                        fontWeight: 600,
                        borderRadius: 0,
                        textTransform: "none",
                        fontSize: 16,
                        width: "600px",
                        "&:hover": {
                            bgcolor: "#e0e0e0",
                        },
                    }}
                >
                    Residential
                </Button>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: "white",
                        color: "black",
                        px: 6,
                        py: 2,
                        fontWeight: 600,
                        borderRadius: 0,
                        textTransform: "none",
                        fontSize: 16,
                        width: "600px",
                        "&:hover": {
                            bgcolor: "#e0e0e0",
                        },
                    }}
                >
                    Commercial
                </Button>
            </Box>
            <Box sx={{ py: 10, px: { xs: 2, md: 10 }, backgroundColor: "#fafafa" }}>
                <Grid container spacing={4} justifyContent="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    maxWidth: 360,
                                    margin: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                    border: "1px solid #ccc",
                                    borderRadius: 0,
                                    boxShadow: "none",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 600, mt: 1 }}>
                                        By {project.developer} | {project.location}
                                    </Typography>
                                    <Typography sx={{ mt: 1, fontSize: 16 }}>
                                        Starting Price <Box component="span" sx={{ fontWeight: 700 }}> {project.price}</Box>
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mt: 1,
                                            fontSize: 15,
                                            color: "#444",
                                            textAlign: "justify",
                                        }}
                                    >
                                        {expanded[index]
                                            ? project.description
                                            : `${project.description.substring(0, 100)}... `}
                                        {project.description.length > 100 && (
                                            <Button
                                                onClick={() => handleToggle(index)}
                                                sx={{
                                                    textTransform: "none",
                                                    color: "#000",
                                                    fontWeight: 600,
                                                    p: 0,
                                                    ml: 1,
                                                    "&:hover": { background: "transparent", color: "#666" },
                                                }}
                                            >
                                                {expanded[index] ? "Less" : "More"}
                                            </Button>
                                        )}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box sx={{ position: "relative", width: "100%", mt: 8, textAlign: "left" }}>
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, pl: 16 }}>
                    Client Experience
                </Typography>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 4, flexWrap: { xs: "wrap", md: "nowrap" } }}>
                    {testimonials.slice(startIndex, startIndex + 3).map((testimonial, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: "1px solid #000",
                                borderRadius: 0,
                                backgroundColor: "transparent",
                                p: 4,
                                width: "250px",
                                textAlign: "left",
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} sx={{ color: "#FFD700" }} />
                                ))}
                            </Box>

                            <Typography variant="body1" sx={{ mb: 2, fontStyle: "italic", color: "#333" }}>
                                "{testimonial.comment}"
                            </Typography>

                            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                {testimonial.name}
                            </Typography>
                            <Typography variant="subtitle2" sx={{ color: "#666" }}>
                                {testimonial.designation}
                            </Typography>
                        </Box>
                    ))}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
                    <IconButton
                        onClick={prevSlide}
                        sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: "white",
                            color: "#000",
                            border: "1px solid #000",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff",
                            },
                            borderRadius: 0,
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                        onClick={nextSlide}
                        sx={{
                            width: 50,
                            height: 50,
                            backgroundColor: "white",
                            color: "#000",
                            border: "1px solid #000",
                            "&:hover": {
                                backgroundColor: "#000",
                                color: "#fff",
                            },
                            borderRadius: 0,
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "927px",
                    mt: 10,
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <Box
                    component="img"
                    src={Home8}
                    alt="Home8"
                    sx={{
                        width: { xs: "100%", md: "55%" },
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
                <Box
                    sx={{
                        width: { xs: "100%", md: "45%" },
                        backgroundColor: "#f0f0f0ff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 3,
                        p: { xs: 4, md: 6 },
                        height: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                        Be The First To <br /> Grow With Banke
                    </Typography>

                    <Typography variant="body1" sx={{ lineHeight: 1.5 }}>
                        Banke International Properties brings you residential and commercial exclusives that are not available elsewhere. Gain priority access, tailored advisory, and investment-ready opportunities today.
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: 14 }}>
                        <Typography sx={{ color: "#000", fontSize: 14 }}>Are you a</Typography>
                        <RadioGroup row defaultValue="developer">
                            <FormControlLabel
                                value="developer"
                                control={
                                    <Radio
                                        sx={{
                                            color: "green",
                                            '&.Mui-checked': { color: "green" },
                                            p: 0.5,
                                            pl: 1,
                                        }}
                                    />
                                }
                                label={<Typography sx={{ fontSize: 14 }}>Developer</Typography>}
                            />
                            <Typography sx={{ mx: 0.5, fontSize: 25 }}>|</Typography>
                            <FormControlLabel
                                value="brokerage"
                                control={
                                    <Radio
                                        sx={{
                                            color: "green",
                                            '&.Mui-checked': { color: "green" },
                                            p: 0.5,
                                            pl: 1,
                                        }}
                                    />
                                }
                                label={<Typography sx={{ fontSize: 14 }}>Brokerage House</Typography>}
                            />
                        </RadioGroup>
                    </Box>
                    <Box
                        component="form"
                        sx={{ display: "flex", flexDirection: "column", gap: 3, width: "100%" }}
                    >
                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                padding: "10px 0",
                                border: "none",
                                borderBottom: "1px solid #000",
                                outline: "none",
                                width: "100%",
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                padding: "10px 0",
                                border: "none",
                                borderBottom: "1px solid #000",
                                outline: "none",
                                width: "100%",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            style={{
                                padding: "10px 0",
                                border: "none",
                                borderBottom: "1px solid #000",
                                outline: "none",
                                width: "100%",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Company Name"
                            style={{
                                padding: "10px 0",
                                border: "none",
                                borderBottom: "1px solid #000",
                                outline: "none",
                                width: "100%",
                            }}
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            style={{
                                padding: "10px 0",
                                border: "none",
                                borderBottom: "1px solid #000",
                                outline: "none",
                                width: "100%",
                            }}
                        />
                        <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon sx={{ color: "#FFD700" }} />}
                            sx={{
                                mt: { xs: 2, md: 0 },
                                borderColor: "#000",
                                backgroundColor: "white",
                                width: 250,
                                color: "#000",
                                fontWeight: 600,
                                textTransform: "none",
                                px: 4,
                                py: 1.5,
                                borderRadius: 0,
                                "&:hover": {
                                    backgroundColor: "transparent",
                                    borderColor: "#000",
                                },
                            }}
                        >
                            ENQUIRE NOW
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
