import products from "./data/products.json"

/**
 * Function ShopPage()
 * @returns Shop page component
 */
 function ShopPage() {
    return (
        <div>
            <h1>Shop</h1>
            <div className="search-bar">
                <h2>Search Products</h2><br></br>
                <input type="search" id="search"/>
            </div>
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