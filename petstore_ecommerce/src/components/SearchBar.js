/**
 * Function SearchBar()
 * @returns SearchBar page component
 * Original stated function.
 */
/*
import { useState } from "react";
function SearchBar_original(props){
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
*/
/**
 * Function SearchBar()
 * @returns SearchBar page component
 * New stateless function.
 */
function SearchBar(props){
    return (
        <div className="search-bar">
            <h2>Search Products</h2>
            <input type="search"
                onChange={(e) => {
                    props.callBack(e.target.value)
                }}
            />
        </div>
    )
}


export default SearchBar;