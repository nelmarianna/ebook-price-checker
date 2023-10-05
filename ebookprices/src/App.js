import React, { useState, useEffect } from "react";
import logo from './EBookDBSmall.png'
import './App.css';
import BookTable from './BookTable';
import SearchField from "./SearchField";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

function App() {
  const [data, setdata] = useState({});

  // useEffect(()=>{
  //   fetch("/hello").then((res)=>
  //   res.json().then((data)=>{
  //     setdata({
  //       message: data.message
  //     });
  //     console.log("fetched");
  //   }));
  // }, []);


  const submitSearch = (value) => {

    fetch("/getByIsbn", 
        {method: "POST", headers: {"Content-Type":"application/json"}, body: `{"author": "${value}"}`}
        ).then((res)=>{
          console.log(res);
          res.json().then((data)=> console.log(data))
          
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
      <BookTable></BookTable>
    </Container>
    </div>
  );
}

export default App;
