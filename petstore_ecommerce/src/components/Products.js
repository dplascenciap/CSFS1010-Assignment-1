/**
 * Function ProductsComp()
 * @returns ProductsComp component
 */
 function ProductsComp(props){

    const lowerCaseInput = props.searchInput.toLowerCase();
    const searchText = field => field.toLowerCase().includes(lowerCaseInput);

    const filteredResults = props.items.filter(
        (b) => searchText(b.name) ||
                searchText(b.supplier) ||
                searchText(String(b.price))
    )

    return (
        <div className="productList">
            {filteredResults.map((productItem) => (
                <div className="product">
                    <li>{productItem.name}</li>
                    <li>{productItem.supplier}</li>
                    <li>{productItem.price}</li>
                    </div>
                ))}
        </div>
    )
 }

 export default ProductsComp;