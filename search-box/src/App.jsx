import './styles/App.css';
import Search from './components/SearchBar';
import { useState } from "react";
import DisplayPosts from './components/DisplayPosts';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <DisplayPosts searchValue={searchValue}>/
    </div>
  );
}

export default App;
