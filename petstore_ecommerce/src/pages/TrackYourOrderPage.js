/**
 * Function TrackYourOrderPage()
 * @returns Track Your Order page component
 */

 function TrackYourOrderPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div>
            <h1>Track Your Order</h1>
            <p>
                Track Your Order page is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default TrackYourOrderPage;