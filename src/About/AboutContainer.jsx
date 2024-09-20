import * as React from 'react';
import StackedContent from './StackedContent.jsx';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// Making container for <StackedContainer />
export default function AboutContainer({ DarkTheme }) {
    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Box component="section" sx={{ p: 2, backgroundColor: DarkTheme ? "#474040" : "white", borderRadius: "0.5rem" }}>
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
                            color: DarkTheme ? "white" : "black",
                        }}
                    >
                        Customize Your Quiz
                    </Typography>
                    <StackedContent DarkTheme={DarkTheme} />
                </Box>
            </Container>
        </React.Fragment>
    );
}
