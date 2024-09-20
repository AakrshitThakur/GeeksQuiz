import { useState } from 'react';
import HeadingH3 from './HeadingH3';

import TextField from '@mui/material/TextField';

// Name text field component
function NameText() {
    const [text, SetText] = useState("");
    function HandleSetText(event) {
        SetText(event.target.value);
    }
    return (
        <>
            <label htmlFor="NameText"><HeadingH3 text="Enter Your Name" MarginB={0.5} MarginT={0} /></label>
            <TextField
                required
                id="NameText"
                className="FormFields"
                name="name"
                label="Required"
                value={text}
                onChange={HandleSetText}
            />
        </>
    );
}
export default NameText;