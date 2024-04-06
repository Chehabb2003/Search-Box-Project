import Search from './components/SearchBar';
import { useState } from "react";
import FilterPosts from './components/FilterPosts';

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="App">
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <FilterPosts searchValue ={searchValue}/>
    </div>
  ); 
}

export default App;
