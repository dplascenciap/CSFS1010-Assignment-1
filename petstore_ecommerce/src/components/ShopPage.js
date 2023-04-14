import products from "./data/products.json"

// Import search bar component
import SearchBar from "./SearchBar";

/**
 * Function ShopPage()
 * @returns Shop page component
 */
 function ShopPage() {
    return (
        <div>
            <h1>Shop</h1>
            <SearchBar />
            <div className="productList">
                {products.map((productItem) => (
                    <div className="product">
                        <li>{productItem.name}</li>
                        <li>{productItem.supplier}</li>
                        <li>{productItem.price}</li>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ShopPage;