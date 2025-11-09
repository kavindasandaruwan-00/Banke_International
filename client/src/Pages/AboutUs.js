import React from 'react'
import AboutUs2 from '../Images/AboutUs2.png';
import AboutUs1 from '../Images/AboutUs1.png';
import AboutUs3 from '../Images/AboutUs3.png';
import AboutUs4 from '../Images/AboutUs4.png';
import Home8 from '../Images/Home8.png';
import { Box, Typography } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, Button, FormLabel } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function AboutUs() {
    return (
        <>
            <Box sx={{ position: 'relative', width: '100%', height: '750px' }}>
                <Box
                    component="img"
                    src={AboutUs1}
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
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#fff',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6"
                        sx={{ mt: 2, fontSize: 30 }}>
                        "Where vision meets opportunity, Banke drives<br /> success through innovation and excellence"
                    </Typography>
                </Box>
            </Box >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, px: { xs: 4, md: 15 }, pt: { xs: 4, md: 8 } }}>
                The Banke International Properties Story
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 4,
                    mt: 2,
                    px: { xs: 4, md: 15 },
                }}
            >


                <Box sx={{ flex: 1, pr: { md: 4 } }}>


                    <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333", mt: 2 }}>
                        Banke is a full-service boutique real estate agency in Dubai with a bold vision and a client-first philosophy. We believe that real estate is more than just transactions, it’s about providing insight, creating value, and guiding our clients toward smarter property investments.
                    </Typography>

                    <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333", mt: 2 }}>
                        Our strength lies in alignment: from our founders and directors to our consultants and support teams, every member of Banke is committed to delivering innovative, intelligent, and personalized solutions. We combine deep market knowledge with a warm, people-centric approach, ensuring that every client feels supported at every step of their journey.
                    </Typography>

                    <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333", mt: 2 }}>
                        At Banke, we don’t just open doors, we unlock opportunities. With us, you gain more than an agency; you gain a trusted partner dedicated to helping you invest wisely and live meaningfully.
                    </Typography>
                </Box>


                <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                    <Box
                        component="img"
                        src={AboutUs2}
                        alt="About Us"
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            height: "auto",
                            pt: 5
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{
                width: "100%",
                height: "850px",
            }}>

                <Box
                    sx={{
                        bgcolor: "#f0f0f0ff",
                        display: "inline-block",
                        position: "relative",
                        zIndex: 2,
                        marginTop: "80px",
                        width: "900px",
                        height: "200px",
                        textAlign: "left",
                        pt: 4,
                        pb: 6,
                        pl: 16,
                        minHeight: "200px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, fontSize: 32, lineHeight: 1.3 }}
                    >
                        The Banke Capital Difference
                    </Typography>

                    <Typography sx={{ mt: 2, fontSize: 16, lineHeight: 1.6 }}>
                        At Banke Capital, we are redefining how real estate partnerships thrive. Born <br />
                        out of the success and trust of Banke International Properties, our mission is<br />
                        simple yet powerful: to create a premier platform where developers and <br />
                        brokers connect seamlessly for exclusive opportunities.
                    </Typography>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "-200px",
                            left: "42%",
                            transform: "translateX(-50%)",
                            width: "550px",
                            bgcolor: "white",
                            p: 4,
                            border: "1px solid #000",
                            zIndex: 2,
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: 24, mb: 2 }}>
                            For Developers
                        </Typography>

                        <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>
                            We offer a direct gateway to some of the region’s most influential brokerage firms, ensuring your projects receive unmatched visibility, market traction, and first-mover advantage. With Banke Capital, your developments are positioned at the forefront of the market, backed by our extensive network, strategic marketing, and proven expertise in driving sales velocity.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "-460px",
                            left: "42%",
                            transform: "translateX(-50%)",
                            width: "550px",
                            bgcolor: "white",
                            p: 4,
                            border: "1px solid #000",
                            zIndex: 2,
                        }}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: 24, mb: 2 }}>
                            For Brokers
                        </Typography>

                        <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>
                            We unlock privileged access to Banke’s exclusive portfolio of properties. This means the chance to market premium developments before they reach the wider market, empowering you with a competitive edge and strengthening your client relationships.
                        </Typography>
                    </Box>

                    <Box
                        component="img"
                        src={AboutUs3}
                        alt="About Us 3"
                        sx={{
                            position: "absolute",
                            right: "-350px",
                            top: "80px",
                            width: "600px",
                            height: "650px",
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box >
            <Box
                sx={{

                    display: "flex",
                    justifyContent: "center",
                    px: { xs: 2, md: 8 },
                }}
            >
                <Box sx={{ maxWidth: "90%", textAlign: "justify" }}>
                    <Typography sx={{ fontSize: 16, lineHeight: 1.5, }}>
                        At our core, Banke Capital is built on trust, exclusivity and collaboration. By bridging the gap between developers and brokerage firms, we create a winning ecosystem where every stakeholder benefits: developers gain the right exposure, brokers gain unique inventory and clients gain exceptional opportunities.
                    </Typography>
                    <br />

                    <Typography sx={{ fontSize: 16, lineHeight: 1.5 }}>
                        With a reputation for excellence and a vision for innovation, Banke Capital is more than a platform, it’s the future of exclusive real estate partnerships.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                width: "100%",
                height: "700px",
            }}>

                <Box
                    sx={{
                        bgcolor: "#f0f0f0ff",
                        display: "inline-block",
                        position: "relative",
                        zIndex: 2,
                        marginTop: "80px",
                        width: "900px",
                        height: "200px",
                        textAlign: "left",
                        pt: 4,
                        pb: 6,
                        pl: 16,
                        minHeight: "200px",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: 800, fontSize: 32, lineHeight: 1.3 }}
                    >
                        Our Philosophy
                    </Typography>

                    <Typography sx={{ mt: 2, fontSize: 16, lineHeight: 1.6 }}>
                        At Banke Capital, we believe that real estate is not just about transactions, it’s <br />
                        about building ecosystems of trust, exclusivity and long-term value. Our <br />
                        philosophy is rooted in collaboration: empowering developers with the right <br />
                        partners and equipping brokers with privileged access to opportunities that <br />
                        set them apart.
                    </Typography>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: "-300px",
                            left: "42%",
                            transform: "translateX(-50%)",
                            width: "600px",
                            bgcolor: "white",
                            p: 4,
                            zIndex: 2,
                        }}
                    >

                        <Typography sx={{ fontSize: 16, lineHeight: 1.8, color: "#333" }}>
                            We stand for exclusivity with integrity, ensuring that every project we represent is handled with the highest standards of professionalism, transparency, and innovation. By uniting the interests of developers, brokers and end clients, we create a cycle of shared success where every stakeholder wins.
                            <br /><br />
                            For us, success is not measured in numbers alone, but in the strength of relationships we nurture and the market impact we deliver. At Banke Capital, our guiding principle is simple: exclusive opportunities, limitless possibilities.

                        </Typography>
                    </Box>

                    <Box
                        component="img"
                        src={AboutUs4}
                        alt="About Us 4"
                        sx={{
                            position: "absolute",
                            right: "-350px",
                            top: "80px",
                            width: "600px",
                            height: "480px",
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "927px",
                    mt: 5,
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
