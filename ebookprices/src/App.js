import React, { useState, useEffect } from "react";
import logo from './EBookDBSmall.png'
import './App.css';
import BookTable from './BookTable';
import SearchField from "./SearchField";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

function App() {
  const [data, setdata] = useState({});

  const submitSearch = (value) => {

    fetch("/getByIsbn", 
        {method: "POST", headers: {"Content-Type":"application/json"}, body: `{"keywords": "${value}"}`}
        ).then((res)=>{
          res.json().then((data)=> setdata(data))
        });
}

  
  return (
    <div>
    <Container>
      <Box sx={{ display: { xs: 'flex'} }}>
        <img src={logo} alt='app logo' height={150}/>
      </Box> 
    </Container>
    <Container className="search-bar">
        <SearchField handleSubmit={submitSearch}></SearchField> 
     </Container>
    <Container>
      <BookTable bookData={data}></BookTable>
    </Container>
    </div>
  );
}

export default App;
