import { useState } from "react";
/**
 * Function SearchBar()
 * @returns SearchBar page component
 */
function SearchBar(props){
    const [searchText, setSearchText] = useState("")
    return (
        <div className="search-bar">
            <h2>Search Products</h2>
            <input type="search"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    props.callBack(e.target.value)
                }}
            />
        </div>
    )
}

export default SearchBar;