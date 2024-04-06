import './styles/App.css';
import Search from './components/Search';
import { useState } from "react";

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  );
}

export default App;
