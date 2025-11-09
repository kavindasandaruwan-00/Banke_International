import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
                py: 2,
                backgroundColor: "black",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    mb: 1,
                }}
            />
            <Typography variant="body2" sx={{ color: "white" }}>
                © 2025 Banke Capital. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
