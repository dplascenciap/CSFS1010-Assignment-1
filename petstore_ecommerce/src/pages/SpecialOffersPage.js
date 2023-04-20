/**
 * Function SpecialOffersPage()
 * @returns Special Offers page component
 */

 function SpecialOffersPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div>
            <h1>Special Offers</h1>
            <p>
                Special Offers page is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default SpecialOffersPage;