function Navbar() {
    return (
        <div className="container">
            <nav>
                <p>This will be the navbar</p>
                <img src="./assets/pet_store_logo.png" alt="Pet Store Logo" id="img_logo"/>
                <ul className="nav-items">
                    <li><a href="">shop</a></li>
                    <li><a href="">new items</a></li>
                    <li><a href="">special offers</a></li>
                    <li><a href="">track your order</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">register/login</a></li>
                </ul>
            </nav>
        </div>
);
}
export default Navbar;

/** =========== NOTES: ===========
 * How to link an image in react?
 * Refer to: https://codingbeautydev.com/blog/react-link-image/
 */