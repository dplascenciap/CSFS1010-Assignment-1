/**
 * Function NewItemsPage()
 * @returns New Items page component
 */

 function NewItemsPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div>
            <h1>New Items</h1>
            <p>
                New Items page is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default NewItemsPage;