import * as React from 'react';
import HeadingH3 from './HeadingH3';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Category select field component
export default function SelectCategory() {
    const [category, SetCategory] = React.useState('Linux');

    const HandleChange = (event) => {
        SetCategory(event.target.value);
    }
    return (
        <>
            <label htmlFor="SelectCategory"><HeadingH3 text="Select the Category of Questions for Your Quiz" MarginB={0.5} MarginT={1.5} /></label>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="SelectCategory"
                        name="category"
                        value={category}
                        label="Category"
                        onChange={HandleChange}
                    >
                        <MenuItem value="Linux">Linux</MenuItem>
                        <MenuItem value="Code">Code</MenuItem>
                        <MenuItem value="DevOps">DevOps</MenuItem>
                        <MenuItem value="SQL">SQL</MenuItem>
                        <MenuItem value="Docker">Docker</MenuItem>
                        <MenuItem value="CMS">CMS</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
}

