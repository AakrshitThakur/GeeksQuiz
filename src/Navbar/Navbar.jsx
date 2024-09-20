import { useState } from "react";
import "./Navbar.css";
import GeekQuizIcon from "../GeekQuizIcon/GeekQuizIcon.jsx";
import ToggleDarkMode from "../ToggleDarkMode/ToggleDarkMode.jsx";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Navbar for the app
export default function Navbar({ check, HandleChange }) {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav id="navbar">
            <Box sx={{ flexGrow: 1, }}>
                <AppBar
                    position="static"
                    sx={{ backgroundColor: "#2e2d2d" }}
                >
                    <Toolbar sx={{ padding: 0.5 }}>
                        {/* App logo icon */}
                        <GeekQuizIcon />

                        {/* App logo text */}
                        <Typography variant="h2" component="h1" sx={{
                            flexGrow: 1,
                            marginRight: "1rem",
                            fontSize: {
                                xs: "2.5rem",
                                sm: "3rem",
                                md: "4rem",
                            },
                            color: {
                                xs: "#fbff00",
                                sm: "white",
                            }
                        }}>
                            GeeksQuiz
                        </Typography>

                        {/* Button to directly navigate to <Start /> */}
                        <div className="LongBtn">
                            <Button variant="contained" disableElevation>
                                <a href="#Start">
                                    Start Your Quiz
                                </a>
                            </Button>
                        </div>

                        {/* Toggling button for dark mode toggling */}
                        <ToggleDarkMode check={check} HandleChange={HandleChange} />
                    </Toolbar>
                </AppBar>
            </Box>
        </nav>
    );
}