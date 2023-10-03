import logo from './EBookDBSmall.png'
import './App.css';
import BookTable from './BookTable';
import { IconButton, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">
    <img src={logo} alt='app logo' height={150}/>
    <div>
      <Input></Input>
      <IconButton aria-label="search"><SearchIcon /></IconButton>
      <BookTable></BookTable>
      </div>
    </div>
  );
}

export default App;
