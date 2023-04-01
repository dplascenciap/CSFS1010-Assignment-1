import NavItem from "./NavItem";

/**
 * Declare array with all the elements to be displayed in the NavBar.
 * All these parameters are sent as props to the component NavItem
 */
 const navItemsArray = [
    {
        isImage:true,
        srcPath:"./assets/pet_store_logo.png",
        desc:"Pet Store Logo",
        id:"img_logo",
        url:"",
        caption:""
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"shop"
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"new items"
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"special offers"
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"track your order"
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"FAQs"
    },

    {
        isImage:false,
        srcPath:"",
        desc:"",
        id:"",
        url:"TBD",
        caption:"register/login"
    },

    {
        isImage:true,
        srcPath:"./assets/shopping-cart.png",
        desc:"shopping-cart Logo",
        id:"img_cart",
        url:"",
        caption:""
    }
]

/**
 * Function Navbar()
 * @returns Navigation bar component
 */
function Navbar() {
    return (
        <div className="container">
            <nav className='navbar'>
                <ul className="nav-items">
                    {navItemsArray.map((navItem) => (
                            <NavItem
                                isImage = {navItem.isImage}
                                srcPath = {navItem.srcPath}
                                desc    = {navItem.desc}
                                id      = {navItem.id}
                                url     = {navItem.url}
                                caption = {navItem.caption}
                            />
                    ))}
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