/**
 * Function FaqsPage()
 * @returns FAQs page component
 */
 function FAQsPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div>
            <h1>FAQs</h1>
            <p>
                FAQs is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default FAQsPage;