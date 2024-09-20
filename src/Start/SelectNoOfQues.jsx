import * as React from 'react';
import HeadingH3 from './HeadingH3';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Number of questions select field component
export default function SelectNoOfQues() {
    const [NoOfQues, SetNoOfQues] = React.useState(10);

    const HandleChange = (event) => {
        SetNoOfQues(event.target.value);
    }
    return (
        <>
            <label htmlFor="SelectNoOfQues"><HeadingH3 text="Select Number Of Questions" MarginB={0.5} MarginT={1.5} /></label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">NoOfQues</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="SelectNoOfQues"
                        name="NoOfQues"
                        value={NoOfQues}
                        label="NoOfQues"
                        onChange={HandleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

