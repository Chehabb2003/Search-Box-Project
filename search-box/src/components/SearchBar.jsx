import '../styles/SearchBar.css';
const Search = ({ searchValue, setSearchValue }) => {

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const searchClearHandler = () => {
        setSearchValue('');
    }

    return (
        <div className="search-container">
            <h2>Search</h2>
            <div>
                <input className="search-input" type="text" value={searchValue} onChange={searchHandler} />
                <button className="clear-button" onClick={searchClearHandler}>Clear search</button>
            </div>
            
        </div>
    )
}

export default Search;