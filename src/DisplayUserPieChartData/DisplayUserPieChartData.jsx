import React from 'react';
import "./DisplayUserPieChartData.css";

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Displaying pie chart data for how many correct, wrong and no responses in user submitted data
export default function DisplayUserPieChartData({ PieChartDataObj }) {
    return (
        <section id="DisplayUserPieChartData">
            <Container className="PieChartContainer" maxWidth="sm">
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        flexGrow: 1,
                        textAlign: "center",
                        fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "2.5rem",
                        },
                    }}
                >
                    Displaying How Many You Got Correct
                </Typography>
                <Pie data={PieChartDataObj.data} />
            </Container>
        </section >
    );
}