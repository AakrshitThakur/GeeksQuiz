// My custom components
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Intro from './Intro/Intro';
import About from "./About/About.jsx";
import Start from "./Start/Start.jsx";
import Footer from "./Footer/Footer.jsx";
import MCQS from './MCQS/MCQS.jsx';
import DisplayUserBarChartData from "./DisplayUserBarChartData/DisplayUserBarChartData.jsx";
import DisplayUserPieChartData from './DisplayUserPieChartData/DisplayUserPieChartData.jsx';
import LeaderBoard from "./LeaderBoard/LeaderBoard.jsx";

// External components(dependencies)
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Paper } from '@mui/material';

// All the data used in charts, MCQS, leader board, etc.
let MCQ_DataObj = undefined;
let BarGraphtDataObj = {
  data: undefined,
  options: undefined,
}
let PieChartDataObj = {
  data: undefined,
  options: undefined,
}
let ShowLeaderBoardAfter1 = 0;
function App() {
  const [LeaderBoardData, SetLeaderBoardData] = useState([]);

  // Boolean piece of state for displaying and removing components for DOM
  const [DisplayMCQS, SetDisplayMCQS] = useState(false);
  const [DisplayCharts, SetDisplayCharts] = useState(false);
  const [DarkTheme, SetDarkTheme] = useState(false);
  const [ResetEverything, SetResetEverything] = useState(false);

  // Reset everything
  function HandleSetResetEverything() {
    MCQ_DataObj = undefined;
    BarGraphtDataObj = {
      data: undefined,
      options: undefined,
    }
    PieChartDataObj = {
      data: undefined,
      options: undefined,
    }
    ShowLeaderBoardAfter1 = 0;
    SetLeaderBoardData([]);
    SetDisplayMCQS(false);
    SetDisplayCharts(false);
    SetResetEverything(!ResetEverything);
  }
  function HandleSetLeaderBoardData(NewLeaderBoardData) {
    SetLeaderBoardData(NewLeaderBoardData);
  }
  function HandleDisplayMCQS(StartFormDataObj) {
    SetDisplayMCQS(true);
    MCQ_DataObj = StartFormDataObj;
  }

  // Setting charts data after MCQS user data is generated
  function HandleDisplayCharts(UserChartsData, DisableCharts) {
    if (DisableCharts) SetDisplayCharts(false);
    else {
      SetDisplayMCQS(false);
      SetDisplayCharts(true);
      BarGraphtDataObj.data = UserChartsData.BarGraphData.data;
      BarGraphtDataObj.options = UserChartsData.BarGraphData.options;
      PieChartDataObj.data = UserChartsData.PieChartData.data;
      PieChartDataObj.options = UserChartsData.PieChartData.options;
      ShowLeaderBoardAfter1++;
    }
  }

  // To toggle b/w dark and light mode
  const AppTheme = createTheme({
    palette: {
      mode: DarkTheme ? 'dark' : 'light',
    },
  });
  const HandleChange = () => {
    SetDarkTheme(!DarkTheme);
  }
  return (
    <ThemeProvider theme={AppTheme}>
      <Paper elevation={0} sx={{ height: "100vh" }} square>
        <div>
          <CssBaseline />
          <Navbar check={DarkTheme} HandleChange={HandleChange} />
          <Intro />
          <About DarkTheme={DarkTheme} />
          {(DisplayCharts || ShowLeaderBoardAfter1) ? <LeaderBoard DisplayMCQS={DisplayMCQS} LeaderBoardData={[...LeaderBoardData]} HandleSetLeaderBoardData={HandleSetLeaderBoardData} BarGraphtDataObj={BarGraphtDataObj} PieChartDataObj={PieChartDataObj} HandleSetResetEverything={HandleSetResetEverything} DarkTheme={DarkTheme} /> : null}
          <Start DarkTheme={DarkTheme} HandleDisplayMCQS={HandleDisplayMCQS} HandleDisplayCharts={HandleDisplayCharts} />
          {DisplayMCQS && <MCQS MCQ_DataObj={MCQ_DataObj} HandleDisplayCharts={HandleDisplayCharts} DarkTheme={DarkTheme} />}
          {DisplayCharts && <DisplayUserBarChartData DarkTheme={DarkTheme} BarGraphtDataObj={
            {
              // Doing it for dark and light mode utility
              data: {
                PlayerName: BarGraphtDataObj.data.PlayerName,
                labels: BarGraphtDataObj.data.labels,
                datasets: [
                  {
                    ...BarGraphtDataObj.data.datasets[0],
                    backgroundColor: DarkTheme ? 'rgb(251, 255, 0)' : 'rgba(0, 30, 60, 1)', // Bar color
                  },
                ],
              },
              options: {
                PlayerName: BarGraphtDataObj.options.PlayerName,
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
            }
          } />}
          {DisplayCharts && <DisplayUserPieChartData PieChartDataObj={
            {
              // Again doing it for dark and light mode utility
              ...PieChartDataObj, options: {
                PlayerName: PieChartDataObj.options.PlayerName,
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
                      label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}`;
                      },
                    },
                  },
                },
              },
            }
          }
          />}
          <Footer />
        </div >
      </Paper>
    </ThemeProvider>
  );
}

export default App;
