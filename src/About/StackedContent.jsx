import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// id variable for key prop
let id = 0;

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 800,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

// An array to parse it directly for StackedContent
const msgs = ['You can specify a category from the categories mentioned above.',
    'You can specify a difficulty level, such as easy, medium, or hard.',
    'Generate a quiz for technologyies that you interested in by choosing a list of specific tags.',
    'You can set a limit on the number of questions in the quiz.',
    'you can get a random set of 20 questions from various difficulties and categories.'
];

export default function StackedContent({ DarkTheme }) {
    return (
        msgs.map(msg => (
            <Box key={++id} sx={{
                flexGrow: 1,
                overflow: 'hidden',
                px: 3,
            }}>
                <Item sx={{ my: 1, mx: 'auto', p: 2, border: DarkTheme && '1px solid rgba(255, 255, 255, 0.35)' }}>
                    <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
                        <div><div className="TickImg"><img src="ImagesUsed/check.png" alt="" /></div></div>
                        <Typography className="AboutMsg" noWrap>{msg}</Typography>
                    </Stack>
                </Item>
            </Box>))
    );
}
