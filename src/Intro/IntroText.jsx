import "./InfoText.css"

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';

// Nested grid of first cell of <intro />
export default function IntroText() {

    // Making an array for URL of img tag
    const IconNamesArray = ['Linux', 'BASH', 'PHP', 'Docker', 'HTML', 'MySQL', 'WordPress', 'Laravel', 'Kubernetes', 'JavaScript', 'DevOps', 'Python'];

    // Index array to iterate IconNamesArray
    let IterateIconNamesArray = 0;
    return (
        <div id="InfoText">
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
                Test Your Knowledge On
            </Typography>
            <div>
                <Box sx={{ flexGrow: 1, p: 2 }}>
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
                        {[...Array(12)].map((_, index) => (
                            <Grid
                                key={index}
                                minHeight={50}
                                size={{
                                    xs: 12,
                                    sm: 6,
                                    md: 4,
                                    lg: 3,
                                }}>
                                <div className="IconGridCell">
                                    <div className="icon"><img src={`ImagesUsed/${IconNamesArray[IterateIconNamesArray]}.svg`} alt="" /></div>
                                    <div className="IconName">{IconNamesArray[IterateIconNamesArray++]}</div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </div>
    );
}