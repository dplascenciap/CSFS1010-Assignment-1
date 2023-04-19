import { Link } from "react-router-dom";

/**
 * Function HomePage()
 * @returns Home page component
 */

function HomePage() {
    return (
        <div className="main_page">
            <img src="./assets/main_picture.png"
                            alt="Dog sitting next to a person"
                            id="img_main"
                        />
            <Link style={{ position:"absolute" }} to="/shop">
                <button className="shop_now">shop now</button>
            </Link>
        </div>
    )
}

export default HomePage;

/** =========== NOTES: ===========
 * Adding Link to button changed its location
 * Refer to: https://stackoverflow.com/questions/68047613/react-router-dom-link-changes-position-of-my-button
 */