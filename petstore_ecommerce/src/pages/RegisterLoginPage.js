/**
 * Function RegisterLoginPage()
 * @returns Register/Login page component
 */

 function RegisterLoginPage() {
    let constSiteUrl = "https://cdn.pixabay.com/photo/2018/03/31/23/41/site-3279650_1280.jpg"
    return (
        <div className="register">
            <h1>Register/Login</h1>
            <p>
                Register and login page is under construction.
            </p>
            <img className='img' src={constSiteUrl} alt='Site under construction' id='construction'/>
        </div>
    )
}

export default RegisterLoginPage;