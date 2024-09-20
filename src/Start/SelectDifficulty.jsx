import * as React from 'react';
import HeadingH3 from './HeadingH3';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Difficulty select field component
export default function SelectDifficulty() {
    const [difficulty, SetDifficulty] = React.useState('Medium');

    const HandleChange = (event) => {
        SetDifficulty(event.target.value);
    }
    return (
        <>
            <label htmlFor="SelectDifficulty"><HeadingH3 text="Select Difficulty Level" MarginB={0.5} MarginT={1.5} /></label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Difficulty</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="SelectDifficulty"
                        className="FormFields"
                        name="difficulty"
                        value={difficulty}
                        label="Difficulty"
                        onChange={HandleChange}
                    >
                        <MenuItem value="Easy">Easy</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Hard">Hard</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

