/**
 * Function ShoppingCartPage()
 * @returns Shopping Cart page component
 */

 function ShoppingCartPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div>
            <h1>Shopping Cart Page</h1>
            <p>
                Shopping Cart page is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default ShoppingCartPage;