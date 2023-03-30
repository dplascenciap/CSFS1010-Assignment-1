/**
 * Function Navbar()
 * @returns Navigation bar component
 */

function Navbar() {
    return (
        <div className="container">
            <nav className='navbar'>
                <ul className="nav-items">
                    <img src="./assets/pet_store_logo.png" alt="Pet Store Logo" id="img_logo" width={128}/>
                    <li><a href="TBD">shop</a></li>
                    <li><a href="TBD">new items</a></li>
                    <li><a href="TBD">special offers</a></li>
                    <li><a href="TBD">track your order</a></li>
                    <li><a href="TBD">FAQs</a></li>
                    <li><a href="TBD">register/login</a></li>
                    <img src="./assets/shopping-cart.png" alt="shopping-cart Logo" id="img_cart" width={128}/>
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