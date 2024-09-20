import axios from 'axios';
import * as React from 'react';
import "./MCQS.css";
import SubmitAnswersByUser from "./SubmitAnswersByUser.jsx";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';


let AllMCQS = null, SetIntervalID = null, CorrectAnswers = null;

export default function MCQS({ MCQ_DataObj, HandleDisplayCharts, DarkTheme }) {
    const [DisableButtons, SetDisableButtons] = React.useState({ previous: true, next: false });
    const [loading, SetLoading] = React.useState(true);
    const [DisplayAnsSelectedByUser, SetDisplayAnsSelectedByUser] = React.useState('');

    // Piece of state to store user response data
    const [AnswersSelectedByUser, SetAnswersSelectedByUser] = React.useState({
        answers: new Array((MCQ_DataObj.RandomQues == "Get A Random Set Of 20 Questions From Various Difficulties And Categories.") ? 20 : parseInt(MCQ_DataObj.NoOfQues)).fill(''),
        TimeTakenPerQues: new Array(((MCQ_DataObj.RandomQues == "Get A Random Set Of 20 Questions From Various Difficulties And Categories.") ? 20 : parseInt(MCQ_DataObj.NoOfQues))).fill(0),
        index: 0,
    });

    // Correct answers of questions from AllMCQS prop
    function CorrectAnswersFunc() {
        CorrectAnswers = AllMCQS.map((MCQ) => {
            if (MCQ.correct_answers.answer_a_correct == "true") return "A";
            else if (MCQ.correct_answers.answer_b_correct == "true") return "B";
            else if (MCQ.correct_answers.answer_c_correct == "true") return "C";
            else if (MCQ.correct_answers.answer_d_correct == "true") return "D";
            else if (MCQ.correct_answers.answer_e_correct == "true") return "E";
            else return "F";
        });
    }
    // Showing loading animation till the API data is found
    function HandleSetLoading() {
        SetLoading(false);
    }
    // Handling answer selectd by user    
    function HandleAnsSelectedByUser(event) {
        SetDisplayAnsSelectedByUser(event.target.innerText);
        SetAnswersSelectedByUser(PrevObj => (
            {
                ...PrevObj, answers: PrevObj.answers.map((answer, index) => (
                    (index == PrevObj.index) ? event.target.innerText : answer
                ))
            }
        ));
    }
    function DecrementIndex() {
        if (!(AnswersSelectedByUser.index == 0)) {
            SetAnswersSelectedByUser(PrevObj => (
                { ...PrevObj, index: PrevObj.index - 1 }
            ));
            SetDisplayAnsSelectedByUser(AnswersSelectedByUser.answers[AnswersSelectedByUser.index - 1]);
            SetDisableButtons(PrevObj => ({ ...PrevObj, next: false }));
        }
        if (AnswersSelectedByUser.index == 1) SetDisableButtons(PrevObj => ({ ...PrevObj, previous: true }));
    }
    function IncrementIndex() {
        if (!(AnswersSelectedByUser.index == (AnswersSelectedByUser.answers.length - 1))) {
            SetAnswersSelectedByUser(PrevObj => (
                { ...PrevObj, index: PrevObj.index + 1 }
            ));
            SetDisplayAnsSelectedByUser(AnswersSelectedByUser.answers[AnswersSelectedByUser.index + 1]);
            SetDisableButtons(PrevObj => ({ ...PrevObj, previous: false }));

        }
        if (AnswersSelectedByUser.index == (AnswersSelectedByUser.answers.length - 2)) SetDisableButtons(PrevObj => ({ ...PrevObj, next: true }));
    }

    // Effect hook for API data retrieval
    React.useEffect(() => {
        async function GetAllMCQS() {
            if (MCQ_DataObj.RandomQues == "Get A Random Set Of 20 Questions From Various Difficulties And Categories.") {
                const ResponseObj = await axios.get('https://quizapi.io/api/v1/questions', {
                    headers: {
                        'X-Api-Key': 'C847eRRAi0XabQDNdksYJ8Bosra5JCa1Hwfl1O7Z',
                    },
                });
                AllMCQS = ResponseObj.data;
                console.log(AllMCQS);
                HandleSetLoading();
                CorrectAnswersFunc();
            }
            else {
                const ResponseObj = await axios.get('https://quizapi.io/api/v1/questions', {
                    headers: {
                        'X-Api-Key': 'C847eRRAi0XabQDNdksYJ8Bosra5JCa1Hwfl1O7Z',
                    },
                    params: {
                        'limit': MCQ_DataObj.NoOfQues,
                        'category': MCQ_DataObj.category,
                        'difficulty': MCQ_DataObj.difficulty,
                    }
                });
                AllMCQS = ResponseObj.data;
                HandleSetLoading();
                CorrectAnswersFunc();
            }
        }
        GetAllMCQS();
    }, []);
    console.log("ID", SetIntervalID);

    // Reassigning SetInterval variable to null if quiz is submitted
    function HandleSetIntervalID() {
        SetIntervalID = null;
    }

    // Effect hook to count time taken
    React.useEffect(() => {
        if (!loading && !SetIntervalID) {
            SetIntervalID = setInterval(() => {
                SetAnswersSelectedByUser(PrevObj => (
                    {
                        ...PrevObj, TimeTakenPerQues: PrevObj.TimeTakenPerQues.map((t, index) => (
                            (index == PrevObj.index) ? (t + 1) : t
                        ))
                    }
                ));
            }, 1000);
            console.log(SetIntervalID);
            return () => (clearInterval(SetIntervalID));
        }
    }, [loading]);

    if (loading) return <section><Box sx={{ width: '100%', py: 1, }}><LinearProgress sx={{ '& .MuiLinearProgress-bar': { backgroundColor: 'rgba(0, 30, 60, 1)' } }} /></Box></section>
    else return (
        <section id="MCQS">
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid className="GridLayout"
                    container
                    sx={{
                        '--Grid-borderWidth': '1px',
                        borderTop: 'var(--Grid-borderWidth) solid',
                        borderLeft: 'var(--Grid-borderWidth) solid',
                        borderColor: '#fbff00',
                        '& > div': {
                            borderRight: 'var(--Grid-borderWidth) solid',
                            borderBottom: 'var(--Grid-borderWidth) solid',
                            borderColor: '#fbff00',
                        },
                    }}
                >
                    {/* Grid cells to show MCQS */}
                    {[...Array(7)].map((_, index) => (
                        <Grid
                            className="GridCell"
                            onClick={HandleAnsSelectedByUser}
                            sx={{ p: 1 }}
                            key={index}
                            minHeight={75}
                            size={{
                                xs: (index == 0) ? 12 : 6,
                                sm: (index == 0) ? 12 : 4,
                                md: (index == 0) ? 12 : 4,
                                lg: (index == 0) ? 12 : 4,
                            }}
                        >
                            <p>
                                {(index == 0) && AllMCQS[AnswersSelectedByUser.index]?.question}
                                {(index == 1) && <>A) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_a}</>}
                                {(index == 2) && <>B) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_b}</>}
                                {(index == 3 && AllMCQS[AnswersSelectedByUser.index]?.answers.answer_c) && <>C) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_c}</>}
                                {(index == 4 && AllMCQS[AnswersSelectedByUser.index]?.answers.answer_d) && <>D) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_d}</>}
                                {(index == 5 && AllMCQS[AnswersSelectedByUser.index]?.answers.answer_e) && <>E) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_e}</>}
                                {(index == 6 && AllMCQS[AnswersSelectedByUser.index]?.answers.answer_f) && <>F) {AllMCQS[AnswersSelectedByUser.index]?.answers.answer_f}</>}
                            </p>

                            {/* Time taken to answer for each quiz question */}
                            {(index == 0) && <span className="TimeTaken">{AnswersSelectedByUser.TimeTakenPerQues[AnswersSelectedByUser.index]}</span>}
                        </Grid>
                    ))}
                </Grid>

                {/* Displaying answer selected by user */}
                {(DisplayAnsSelectedByUser) && <p className="AnsSelectedByUser">{DisplayAnsSelectedByUser}</p>}

                {/* Buttons for next-prev utility  */}
                <div className="MCQS_Buttons">
                    <div className="LongBtn" onClick={DecrementIndex}>
                        <Button variant="contained" disabled={DisableButtons.previous} disableElevation>
                            Previous
                        </Button>
                    </div>

                    {/* Calling <SubmitAnswersByUser /> if it's a last question */}
                    {DisableButtons.next ? <SubmitAnswersByUser SetIntervalID={SetIntervalID} PlayerName={MCQ_DataObj.name} AnswersSelectedByUser={AnswersSelectedByUser} HandleDisplayCharts={HandleDisplayCharts} CorrectAnswers={CorrectAnswers} HandleSetIntervalID={HandleSetIntervalID} DarkTheme={DarkTheme} /> :
                        <div className="LongBtn" onClick={IncrementIndex}>
                            <Button variant="contained" disableElevation>
                                Next
                            </Button>
                        </div>}
                </div>
            </Box>
        </section>
    );
}