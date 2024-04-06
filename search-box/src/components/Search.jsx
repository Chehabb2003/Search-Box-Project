const Search =  ({searchValue, setSearchValue}) => {
    

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div className="search-container">
            <h2>Search</h2>
            <input type="text" value={searchValue} onChange={searchHandler} />
        </div>
    )
}

export default Search;