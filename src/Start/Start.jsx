import * as React from "react";
import NameText from "./NameText.jsx";
import SelectCategory from "./SelectCategory.jsx";
import SelectDifficulty from "./SelectDifficulty.jsx";
import SelectNoOfQues from "./SelectNoOfQues.jsx";
import SelectRandomQues from "./SelectRandomQues.jsx";
import MCQS from "../MCQS/MCQS.jsx";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

export default function Start({ HandleDisplayMCQS, HandleDisplayCharts, DarkTheme }) {
    const StartFormRef = React.useRef(null);
    function HandleStartSubmit(event) {
        event.preventDefault();

        // Getting query string data from form submission
        const StartFormData = new FormData(StartFormRef.current);
        const StartFormDataObj = {};
        StartFormData.forEach((value, index) => {
            StartFormDataObj[index] = value;
        });
        HandleDisplayMCQS(StartFormDataObj);
    }
    return (
        <section id="Start" style={{ display: "flex", flexDirection: "row", justifyContent: "centrt", border: DarkTheme ? "1px solid #515151" : "1px solid #e0e0e0" }} >
            <React.Fragment>
                <Container maxWidth="md">
                    <Box component="div" sx={{ p: 2, textAlign: "center", }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                marginTop: 1,
                                fontSize: {
                                    xs: "1.5rem",
                                    sm: "2rem",
                                    md: "2.5rem",
                                },
                            }}
                        >
                            Click To Start Your Tech Quiz
                        </Typography>

                        {/* Popup when clicked Start Your Quiz button */}
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div className="LongBtn">
                                    <span onClick={() => HandleDisplayCharts("No data to pass", true)}>
                                        <Button variant="contained" disableElevation {...bindTrigger(popupState)}>
                                            Start Your Quiz
                                        </Button>
                                    </span>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Typography component="div" sx={{ px: 4, py: 2, }}>
                                            <form id="StartForm" ref={StartFormRef} onSubmit={HandleStartSubmit}>
                                                <NameText />
                                                <SelectCategory />
                                                <SelectDifficulty />
                                                <SelectNoOfQues />
                                                <SelectRandomQues />
                                                <div className="LongBtn">
                                                    <Button type="submit" variant="contained" disableElevation>
                                                        Submit
                                                    </Button>
                                                </div>
                                            </form>
                                        </Typography>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                    </Box>
                </Container>
            </React.Fragment>
        </section>
    );
}
