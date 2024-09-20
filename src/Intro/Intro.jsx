import "./Intro.css";
import IntroText from "./IntroText.jsx";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

// Setting up a Grid of two cells
export default function FullWidthGrid() {
    return (
        <section id="info">
            <Box sx={{ flexGrow: 1, width: "85%", p: 1, mx: "auto", textAlign: "center" }}>
                <Grid
                    container
                    sx={{
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: 'divider',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: 'divider',
                        },
                    }}
                >
                    {[...Array(2)].map((_, index) => (
                        <Grid
                            key={index}
                            minHeight={160}
                            size={{
                                xs: 12,
                                sm: 12,
                                md: 12,
                                lg: (index === 0) ? 9 : 3,
                            }}>
                            {(index == 0) ? <IntroText /> : <div className="img"><img src="ImagesUsed/QuestionMark.png" alt="" /></div>}
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </section>
    );
}