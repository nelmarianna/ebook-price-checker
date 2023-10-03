import React, { useState, useEffect } from "react";
import logo from './EBookDBSmall.png'
import './App.css';
import BookTable from './BookTable';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [data, setdata] = useState({
    message: ""
  });

  useEffect(()=>{
    fetch("/hello").then((res)=>
    res.json().then((data)=>{
      setdata({
        message: data.message
      });
    }));
  }, []);

  return (
    <div className="App">
    <img src={logo} alt='app logo' height={150}/>
    <header>
      <h1>Flask Message</h1>
      <p>{data.message}</p>
    </header>
    <div>
      <Input></Input>
      <IconButton aria-label="search"><SearchIcon /></IconButton>
      <BookTable></BookTable>
      </div>
    </div>
  );
}

export default App;
