
import Button from '@mui/material/Button';
export default function SubmitAnswersByUser({ SetIntervalID, PlayerName, AnswersSelectedByUser, HandleDisplayCharts, CorrectAnswers, HandleSetIntervalID, DarkTheme }) {

    // Return 1 if correct, -1 if no response and 0 if wrong answer choosen
    const CheckIfUserCorrect = AnswersSelectedByUser.answers.map((AnswerGiven, index) => {
        if (AnswerGiven.slice(0, 1) == CorrectAnswers[index]) return 1;
        else if (AnswerGiven.slice(0, 2) == '') return -1;
        else return 0;
    });

    // Variables to pass it down to pie chart data
    let CorrectByUser = 0, WrongByUser = 0, LeftByUser = 0;
    CheckIfUserCorrect.forEach(check => {
        if (check == 1) CorrectByUser++;
        else if (check == 0) WrongByUser++;
        else LeftByUser++;
    });

    // Bar graph and pie chart data in UserChartsData variable
    const UserChartsData = {
        BarGraphData: {
            data: {
                PlayerName: PlayerName,
                labels: new Array(AnswersSelectedByUser.answers.length).fill(0).map((answer, index) => (`Question ${index + 1}`)), // X-axis labels
                datasets: [
                    {
                        label: 'Time Taken For This Quiz', // Label for the dataset
                        data: AnswersSelectedByUser.TimeTakenPerQues.map(t => t), // Data points for each label
                        backgroundColor: DarkTheme ? 'rgb(251, 255, 0)' : 'rgba(0, 30, 60, 1)', // Bar color
                        borderColor: 'rgba(0, 30, 60, 1)', // Border color
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                PlayerName: PlayerName,
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                        grid: {
                            display: true,
                            lineWidth: 0.25,
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                    },
                    y: {
                        ticks: {
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                        grid: {
                            display: true,
                            lineWidth: 0.25,
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                    },
                },
            },
        },
        PieChartData: {
            data: {
                PlayerName: PlayerName,
                labels: ['Correct Answers', 'Wrong Answers', 'No Responses',],
                datasets: [
                    {
                        label: 'Quiz Pie Chart',
                        data: [CorrectByUser, WrongByUser, LeftByUser],
                        backgroundColor: [
                            'rgba(128, 165, 24, 1)',
                            'rgba(208, 0, 0, 1)',
                            'rgba(147, 163, 146, 1)',
                        ],
                        borderColor: [
                            'rgba(0, 30, 60, 1)',
                            'rgba(0, 30, 60, 1)',
                            'rgba(0, 30, 60, 1)',
                        ],
                        borderWidth: 0,
                    },
                ],
            },
            options: {
                PlayerName: PlayerName,
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            color: DarkTheme ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)',
                        },
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.label || '';
                                const value = context.raw;
                                return `${label}: ${value}`;
                            },
                        },
                    },
                },
            },
        },
    }

    // Handle if user submitted the quiz
    function CallHandleDisplayCharts() {
        clearInterval(SetIntervalID);
        HandleSetIntervalID();
        HandleDisplayCharts(UserChartsData, false);
    }
    return (
        <div className="LongBtn">
            <Button variant="contained" onClick={CallHandleDisplayCharts} disableElevation>
                Submit Your Quiz
            </Button>
        </div>
    );
}