import React from 'react';
import "./DisplayUserBarChartData.css";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Displaying bar graph data for how much time taken to answer a question
export default function DisplayUserBarChartData({ DarkTheme, BarGraphtDataObj }) {
    return (
        <section id="DisplayUserBarChartData" style={{ border: DarkTheme ? "1px solid #515151" : "1px solid #e0e0e0" }}>
            <Container className="BarChartContainer" maxWidth="md">
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
                    Time Taken For Each Question
                </Typography>
                <Bar data={BarGraphtDataObj.data} options={BarGraphtDataObj.options} />
            </Container>
        </section >
    );
}