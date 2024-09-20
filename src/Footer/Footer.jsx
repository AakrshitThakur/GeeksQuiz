import "./Footer.css";

import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <footer>
            <div className="FooterContent">

                {/* GeeksQuiz icon */}
                <div className="FooterLogo"><img src="/ImagesUsed/GeekQuizLogo.png" alt="" /></div>

                {/* Displaying social links */}
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
                    Our Social Links
                </Typography>
                <div className="SocialIcon">
                    <a href="https://www.linkedin.com/in/aakrshit-thakur-14433627b/">
                        <img src="ImagesUsed\LinkedinIcon.svg" alt="" />
                    </a>
                </div>
                <div className="SocialIcon">
                    <a href="https://github.com/AakrshitThakur">
                        <img src="ImagesUsed\GitHubIcon.svg" alt="" />
                    </a>
                </div>
            </div>

            {/* Acknowledgement given to https://quizapi.io/ */}
            <div className="acknowledgement"><p>A Special thanks to <a href="https://quizapi.io/"><i>QuizApi</i></a> for their API providing an enormous dataset.</p></div>
        </footer>
    );
}
