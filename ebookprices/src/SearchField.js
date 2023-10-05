import { IconButton, InputBase, Paper, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
import PropTypes from "prop-types";

const SearchField = ({handleSubmit}) =>{

    const [value, setValue] = useState("");
    const [showClear, setShowClear] = useState(false);

    const handleClear = () => {
        setValue("");
    }
    const handleChange = (e) =>{
        setValue(e.target.value);
    }
    const handleFocus = () =>{
        setShowClear(true);
    }

   return ( 
    <div>
        <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase 
                sx={{ ml: 1, flex: 1 }} 
                placeholder='Search by Title, Author or ISBN' 
                autoComplete='true'
                onChange={handleChange}
                onFocus={handleFocus} 
                value={value}
                />
            {value && showClear && (<IconButton onClick={handleClear}><ClearIcon fontSize='small' /></IconButton>)}
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton aria-label="search" type="submit" onClick={(e)=>{ e.preventDefault(); handleSubmit(value);}}><SearchIcon /></IconButton>
        </Paper>
    </div>
);
};

SearchField.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default SearchField;