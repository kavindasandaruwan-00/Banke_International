import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../Images/Logo.png";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/AboutUs" },
        { name: "Exclusive Projects", path: "/ExclusiveProject" },
        // { name: "Meet Our Team", path: "/team" },
        { name: "Contact Us", path: "/ContactUs" },
    ];

    return (
        <AppBar
            position="absolute"
            sx={{
                background: "transparent",
                boxShadow: "none",
                paddingY: 2,
            }}
        >
            {/* White underline container */}
            <Box
                sx={{
                    width: "80%",
                    mx: "auto", // center the underline
                    borderBottom: "2px solid white",
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                            component="img"
                            src={Logo}
                            alt="Banke Capital Logo"
                            sx={{ height: 50 }}
                        />
                    </Box>

                    <Box sx={{ display: "flex", gap: 4 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                component={Link}
                                to={item.path}
                                sx={{
                                    color: "white",
                                    fontWeight: 500,
                                    textTransform: "none",
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        left: 0,
                                        bottom: 0,
                                        width: "0%",
                                        height: "2px",
                                        backgroundColor: "#FFD700",
                                        transition: "width 0.3s ease-in-out",
                                    },
                                    "&:hover::after": {
                                        width: "100%",
                                    },
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>

    );
};

export default Navbar;
