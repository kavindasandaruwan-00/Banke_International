import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PaidIcon from '@mui/icons-material/Paid';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import StarIcon from '@mui/icons-material/Star';
import Home1 from '../Images/Home1.png';
import Home2 from '../Images/Home2.png';
import Home3 from '../Images/Home3.png';
import Home4 from '../Images/Home4.png';
import Home5 from '../Images/Home5.png';
import Home6 from '../Images/Home6.png';
import Home7 from '../Images/Home7.png';
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

const cards = [
    {
        icon: <LocationCityIcon sx={{ fontSize: 40, color: "#000" }} />,
        title: "Priority Access",
        description: "Be among the first to secure prime opportunities before they reach the open market.",
    },
    {
        icon: <VolunteerActivismIcon sx={{ fontSize: 40, color: "#000" }} />,
        title: "Residential & Commercial Choices",
        description: "From signature residences to Grade A office towers, our exclusives span both lifestyle and business.",
    },
    {
        icon: <PaidIcon sx={{ fontSize: 40, color: "#000" }} />,
        title: "Capital Growth & ROI",
        description: "Each project is selected for sustainable appreciation and strong rental demand.",
    },
    {
        icon: <HandshakeIcon sx={{ fontSize: 40, color: "#000" }} />,
        title: "Trusted Developer Partnerships",
        description: "We bring you projects backed by leading developers, ensuring reliability and transparency.",
    },
];

const Home = () => {

    const [startIndex, setStartIndex] = useState(0);

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 >= 0 ? prev - 1 : testimonials.length - 3));
    };

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1 <= testimonials.length - 3 ? prev + 1 : 0));
    };

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                    backgroundImage: `url(${Home1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#000000",
                        opacity: 0.3,
                        zIndex: 1,
                    }}
                />
                <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
                    <Typography
                        variant="h3"
                        sx={{ fontWeight: 600, color: "white", mb: 2 }}
                    >
                        Where <span style={{ color: "#FFD700" }}>Exclusivity</span> Meets Opportunity
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "400px",
                        background: "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))",
                        zIndex: 2,
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "80%",
                        bgcolor: "white",
                        p: { xs: 3, md: 3 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 3,
                    }}
                >
                    <Box sx={{ maxWidth: { xs: "100%", md: "70%" }, textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="h5"
                            sx={{ color: "#000000ff", fontWeight: 600, mb: 2, fontSize: 42 }}
                        >
                            Exclusive Projects, Only with Banke
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: "#000000ff", lineHeight: 1.6 }}
                        >
                            Discover a curated portfolio of residential and commercial developments available exclusively through Banke International Properties. From landmark addresses to investment-ready spaces, our exclusive projects offer unmatched access, premium advantages, and long-term value.
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        endIcon={<ArrowForwardIcon sx={{ color: "#FFD700" }} />}
                        sx={{
                            mt: { xs: 2, md: 0 },
                            borderColor: "#000",
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
                        Register Your Interest Today
                    </Button>
                </Box>
            </Box >

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4,
                    flexWrap: "wrap",
                }}
            >
                <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" }, height: "600px" }}>
                    <Box
                        component="img"
                        src={Home3}
                        alt="Home3"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "20%",
                            right: "0%",
                            bgcolor: "white",
                            p: 3,
                            maxWidth: "45%",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Residential
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: "#333" }}>
                            Modern residences in thriving communities, designed for lifestyle and long-term investment growth.
                        </Typography>
                        <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon sx={{ color: "#FFD700" }} />}
                            sx={{
                                mt: { xs: 2, md: 1 },
                                borderColor: "#000",
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
                            View More
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ position: "relative", width: { xs: "100%", md: "50%" }, height: "600px" }}>
                    <Box
                        component="img"
                        src={Home2}
                        alt="Home2"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            top: "55%",
                            left: "0%",
                            bgcolor: "white",
                            p: 3,
                            maxWidth: "45%",
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            Commercial
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: "#333" }}>
                            Premium office spaces and retail opportunities positioned in Dubai’s most dynamic business districts.
                        </Typography>
                        <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIcon sx={{ color: "#FFD700" }} />}
                            sx={{
                                mt: { xs: 2, md: 1 },
                                borderColor: "#000",
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
                            View More
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    bgcolor: "#f0f0f0ff",
                    display: "inline-block",
                    position: "relative",
                    zIndex: 1,
                    marginTop: "80px",
                    width: "550px",
                    height: "150px",
                    textAlign: "left",
                    pt: 3,
                    pb: 4,
                    pl: 15,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 800, fontSize: 32 }}>
                    Why Banke Capital
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "center",
                    mt: -12,
                    zIndex: 2,
                    position: "relative",
                }}
            >
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            border: "1px solid #000",
                            borderRadius: 0,
                            p: 3,
                            width: { xs: "100%", md: "15%" },
                            boxShadow: "none",
                            backgroundColor: "#fff",
                        }}
                    >
                        {card.icon}
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                            {card.title}
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: "#333" }}>
                            {card.description}
                        </Typography>
                    </Box>
                ))}
            </Box>

            <Box sx={{ position: "relative", mt: 10 }}>
                <Box
                    component="img"
                    src={Home4}
                    alt="Home4"
                    sx={{
                        position: "absolute",
                        right: 0,
                        top: "120px",
                        width: "500px",
                        height: "500px",
                        objectFit: "cover",
                        pr: 10,
                        zIndex: 3,
                    }}
                />

                <Box
                    sx={{
                        bgcolor: "#f0f0f0ff",
                        display: "inline-block",
                        position: "relative",
                        zIndex: 2,
                        marginTop: "10px",
                        width: "900px",
                        height: "200px",
                        textAlign: "left",
                        pt: 3,
                        pb: 6,
                        pl: 16,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, fontSize: 32, lineHeight: 1.3 }}
                    >
                        The Banke Advantage : <br />
                        A 360 Partner Solution
                    </Typography>

                    <Typography sx={{ mt: 2, fontSize: 16, lineHeight: 1.6 }}>
                        At Banke, we don’t just list properties — we create pathways to <br />
                        opportunity. Our exclusive projects reflect strategic selection, market <br />
                        foresight, and developer trust. With end-to-end support, from selection <br />
                        and financing to leasing and management, we ensure your experience is <br />
                        seamless and rewarding.
                    </Typography>
                </Box>

                <Typography
                    sx={{
                        mt: 8,
                        mb: 6,
                        textAlign: "left",
                        fontSize: 18,
                        color: "#333",
                        maxWidth: "1200px",
                        mx: "auto",
                        lineHeight: 1.6,
                    }}
                >
                    At Banke, we don't just list properties – we create pathways to <br /> opportunity.
                    Our projects reflect strategic selection, market foresight & <br />developer trust.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                        maxWidth: "1200px",
                        mx: "auto",
                        mb: 8,
                        justifyContent: "left",
                    }}
                >
                    {[
                        { text: "Sales Enablement Partner", icon: <CrisisAlertOutlinedIcon sx={{ fontSize: 60, color: "#000000ff" }} /> },
                        { text: "360 degree Integrated Marketing Orchestration", icon: <CampaignOutlinedIcon sx={{ fontSize: 60, color: "#000000ff" }} /> },
                        { text: "Wide Broker Network Engagement", icon: <Groups2OutlinedIcon sx={{ fontSize: 60, color: "#000000ff" }} /> },
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                                gap: 1.5,
                                width: { xs: "60px", md: "200px" },
                            }}
                        >
                            {item.icon}
                            <Typography>{item.text}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box sx={{ position: "relative", width: "100%", height: "500px", mt: 8 }}>
                <Box
                    component="img"
                    src={Home5}
                    alt="Home5"
                    sx={{
                        width: "100%",
                        height: "500px",
                        objectFit: "cover",
                    }}
                />

                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(5, 5, 5, 0.87)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: "80px",
                        left: "25%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        zIndex: 2,
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffffff" }}>
                        Why Partner With Us
                    </Typography>
                </Box>

                <Box
                    ref={ref}
                    sx={{
                        position: "absolute",
                        bottom: "80px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 4,
                        flexWrap: "wrap",
                        justifyContent: "center",
                        zIndex: 2,
                        width: "90%",
                    }}
                >
                    {[
                        { value: 50, suffix: "B+", label: "Portfolio Value" },
                        { value: 200, suffix: "+", label: "Broker Network" },
                        { value: 13, suffix: "+", label: "Years of Experience" },
                        { value: 2000, suffix: "+", label: "Exclusive Listings" },
                    ].map((card, index) => (
                        <Box
                            key={index}
                            sx={{
                                border: "1px solid #fff",
                                backgroundColor: "transparent",
                                borderRadius: 0,
                                p: 3,
                                minWidth: { xs: "150px", md: "200px" },
                                textAlign: "center",
                                height: "200px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 800, color: "#FFD700", mb: 1 }}>
                                {inView ? (
                                    <CountUp start={0} end={card.value} duration={2.5} suffix={card.suffix} />
                                ) : (
                                    `0${card.suffix}`
                                )}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#fff", lineHeight: 1.6 }}>
                                {card.label}
                            </Typography>
                        </Box>
                    ))}
                </Box>
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
                    bgcolor: "#f0f0f0ff",
                    display: "inline-block",
                    position: "relative",
                    zIndex: 1,
                    marginTop: "80px",
                    width: "650px",
                    height: "250px",
                    textAlign: "left",
                    pt: 4,
                    pb: 4,
                    pl: 16,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: 800, fontSize: 32 }}>
                    Banke Capital Experts
                </Typography>
                <br /><br />
                <Typography>
                    Meet the leadership team at Banke. Discover our experts driving real estate <br /> success across Dubai with strategic innovation and market expertise.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    justifyContent: "center",
                    mt: -15,
                    zIndex: 2,
                    position: "relative",
                }}
            >
                {[
                    { image: Home6, name: "Expert Name", designation: "Designation" },
                    { image: Home7, name: "Expert Name", designation: "Designation" },
                    { image: Home6, name: "Expert Name", designation: "Designation" },
                    { image: Home7, name: "Expert Name", designation: "Designation  " },
                ].map((card, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: "45%", md: "18%" },
                            textAlign: "left",
                        }}
                    >
                        <Box
                            sx={{
                                border: "1px solid #000",
                                borderRadius: 0,
                                p: 0,
                                height: 350,
                                boxShadow: "none",
                                backgroundColor: "#c9c7c7ff",
                                overflow: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                "&:hover img": {
                                    transform: "scale(1.05)",
                                    transition: "transform 0.4s ease",
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={card.image}
                                alt={card.name}
                                sx={{
                                    width: "90%",
                                    height: "auto",
                                    objectFit: "contain",
                                    transition: "transform 0.4s ease",
                                }}
                            />
                        </Box>

                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", mt: 2, fontSize: "1.5rem", }}
                        >
                            {card.name}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#555", fontSize: "1rem", }}
                        >
                            {card.designation}
                        </Typography>
                    </Box>
                ))}
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
    );
};

export default Home;
