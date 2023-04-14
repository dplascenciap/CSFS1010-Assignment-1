import products from "./data/products.json"

// Import search bar component
import SearchBar from "./SearchBar";

// Import products component
import ProductsComp from "./Products";

// Import useState
import { useState } from "react";

/**
 * Function ShopPage()
 * @returns Shop page component
 */
 function ShopPage() {

    const [searchText, setSearchText] = useState("")

    return (
        <div>
            <h1>Shop</h1>
            <SearchBar callBack={(t) => setSearchText(t)}/>
            <ProductsComp items={products} searchInput={searchText}/>
        </div>
    )
}

export default ShopPage;