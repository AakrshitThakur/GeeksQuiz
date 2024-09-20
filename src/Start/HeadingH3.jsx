import Typography from '@mui/material/Typography';

// A prototype for my heading under <Start /> popup
export default function HeadingH3({ text, MarginT, MarginB }) {
    return (
        <>
            <Typography
                variant="h6"
                component="h3"
                sx={{
                    flexGrow: 1,
                    marginBottom: MarginB,
                    marginTop: MarginT,
                    textAlign: "center",
                    fontSize: {
                        xs: "0.75rem",
                        sm: "1rem",
                        md: "1.25rem",
                    },
                }}
            >
                {text}
            </Typography>
        </>
    );
}