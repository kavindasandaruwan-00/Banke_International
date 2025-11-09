import React from 'react'
import { Box, Typography, Button } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, } from "@mui/material";
import ContactUs1 from "../Images/ContactUs1.png"
import Home8 from '../Images/Home8.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContactUs() {
    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '750px' }}>
                <Box
                    component="img"
                    src={ContactUs1}
                    alt="About Us"
                    sx={{
                        width: '100%',
                        height: '750px',
                        objectFit: 'cover',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '750px',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '30%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        textAlign: 'left',
                        px: 4,
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: 18, lineHeight: 1.6 }}>
                        Your journey to refined living begins here. Our dedicated team is always <br />
                        ready to assist you with personalized guidance, exclusive property insights, <br />
                        and expert advice.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mt: 8, px: 20 }}>

                <Box sx={{ flex: '1 1 400px', minWidth: 300 }}>
                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>📍 Visit Us</Typography>
                        <Typography>Banke Capital</Typography>
                        <Typography>415 Emarat Atrium, Sheikh Zayed Road Dubai, UAE</Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>📞 Call Us</Typography>
                        <Typography>+971 [Phone Number]</Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>✉️ Email Us</Typography>
                        <Typography>Info@bankecapital.com</Typography>
                    </Box>

                    <Box sx={{ mb: 3 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>🕒 Office Hours</Typography>
                        <Typography>Monday – Friday: 9:00 AM – 6:00 PM</Typography>
                        <Typography>Saturday – Sunday: Closed</Typography>
                    </Box>
                </Box>

                <Box sx={{ flex: '1 1 600px', minWidth: 300, height: 400 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.407958718993!2d55.254091775269714!3d25.189461177715927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d8f6c9dd01%3A0x4e2376d040c7ef6d!2sBanke%20International%20Properties%20-%20Dubai%20(Head%20Office)!5e0!3m2!1sen!2sae!4v1762581362417!5m2!1sen!2sae"
                        width="700px"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Banke Capital Location"
                    ></iframe>
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
