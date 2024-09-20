import * as React from 'react';
import "./LeaderBoard.css";

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

let id = 0;
export default function LeaderBoard({ DisplayMCQS, LeaderBoardData, HandleSetLeaderBoardData, BarGraphtDataObj, PieChartDataObj, HandleSetResetEverything, DarkTheme }) {
    let temp = [...LeaderBoardData];
    console.log("LBD: ", LeaderBoardData);
    // Effect hook to add or modify LeaderBoard data 
    React.useEffect(() => {
        let NewEntry = true;
        if (!DisplayMCQS) {
            LeaderBoardData.map((MCQ, index) => {
                if (MCQ.FullName == BarGraphtDataObj.data.PlayerName) {
                    NewEntry = false;
                    temp[index] = {
                        id: LeaderBoardData[index].id, FullName: `${BarGraphtDataObj.data.PlayerName}`,
                        CorrectPerc: (`${((PieChartDataObj.data.datasets[0].data[0] + LeaderBoardData[index].CorrectAns) / (PieChartDataObj.data.datasets[0].data[0] + PieChartDataObj.data.datasets[0].data[1] + PieChartDataObj.data.datasets[0].data[2] + LeaderBoardData[index].TotalQuesInQuiz)) * 100}%`),
                        CorrectAns: PieChartDataObj.data.datasets[0].data[0] + LeaderBoardData[index].CorrectAns,
                        WrongAns: PieChartDataObj.data.datasets[0].data[1] + LeaderBoardData[index].WrongAns,
                        NoResponse: PieChartDataObj.data.datasets[0].data[2] + LeaderBoardData[index].NoResponse,
                        TotalQuesInQuiz: PieChartDataObj.data.datasets[0].data[0] + PieChartDataObj.data.datasets[0].data[1] + PieChartDataObj.data.datasets[0].data[2] + LeaderBoardData[index].TotalQuesInQuiz,
                    },
                        HandleSetLeaderBoardData([...temp]);
                }
            });
            if (NewEntry) {
                HandleSetLeaderBoardData([
                    ...LeaderBoardData,
                    {
                        id: ++id, FullName: `${BarGraphtDataObj.data.PlayerName}`,
                        CorrectPerc: (`${(PieChartDataObj.data.datasets[0].data[0] / (PieChartDataObj.data.datasets[0].data[0] + PieChartDataObj.data.datasets[0].data[1] + PieChartDataObj.data.datasets[0].data[2])) * 100}%`),
                        CorrectAns: PieChartDataObj.data.datasets[0].data[0],
                        WrongAns: PieChartDataObj.data.datasets[0].data[1],
                        NoResponse: PieChartDataObj.data.datasets[0].data[2],
                        TotalQuesInQuiz: PieChartDataObj.data.datasets[0].data[0] + PieChartDataObj.data.datasets[0].data[1] + PieChartDataObj.data.datasets[0].data[2],
                    },
                ]);
            }
        }
    }, [DisplayMCQS]);


    // Setting headers of LeaderBoard
    const columns = [
        {
            field: 'id',
            headerName: 'S/N',
            width: 75,
            editable: true,
        },
        {
            field: 'FullName',
            headerName: 'Full Name',
            width: 200,
            editable: true,
        },
        {
            field: 'CorrectPerc',
            headerName: 'Correct Percentage',
            width: 180,
            editable: true,
        },
        {
            field: 'CorrectAns',
            headerName: 'Total Correct Answers',
            width: 180,
            editable: true,
        },
        {
            field: 'WrongAns',
            headerName: 'Total Wrong Answers',
            width: 180,
            editable: true,
        },
        {
            field: 'NoResponse',
            headerName: 'Total No Responses',
            width: 180,
            editable: true,
        },
        {
            field: 'TotalQuesInQuiz',
            headerName: 'Total Questions In The Quiz',
            width: 200,
            editable: true,
        },
    ];

    // Setting records for LeaderBoard
    const rows = [...LeaderBoardData];
    console.log("Rows: ", rows);

    return (
        <section id="LeaderBoard" style={{ border: DarkTheme ? "1px solid #515151" : "1px solid #e0e0e0" }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    marginTop: "1rem",
                    textAlign: "center",
                    fontSize: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "2.5rem",
                    },
                }}
            >
                Leader Board
            </Typography>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                    pageSizeOptions={[10]}
                />
            </Box>

            {/* Reset everything in the leaderboard */}
            <div className="LongBtn">
                <Button variant="contained" onClick={() => { HandleSetResetEverything(); id = 0; }} disableElevation>
                    Reset Leader Board
                </Button>
            </div>
        </section>
    );
}