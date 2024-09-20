import * as React from 'react';
import HeadingH3 from './HeadingH3';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Random questions select field component
export default function SelectRandomQues() {
    const [RandomQues, SetRandomQues] = React.useState('Go With My Above Customizations');
    const HandleChange = (event) => {
        SetRandomQues(event.target.value);
    }
    return (
        <>
            <label htmlFor="SelectRandomQues"><HeadingH3 text="Select Difficulty Level" MarginB={0.5} MarginT={1.5} /></label>
            <Box sx={{ minWidth: 120, marginBottom: 1.25 }}>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">RandomQues</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name="RandomQues"
                        value={RandomQues}
                        label="RandomQues"
                        onChange={HandleChange}
                    >
                        <MenuItem value="Get A Random Set Of 20 Questions From Various Difficulties And Categories.">Get a Random Set Of 20 Questions From Various Difficulties And Categories.</MenuItem>
                        <MenuItem value="Go With My Above Customizations">Go With My Above Customizations</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </>
    );
}

