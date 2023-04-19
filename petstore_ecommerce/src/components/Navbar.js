import RenderItem  from "./RenderMenuItem";
// The navigation items are retrieved from the json file navItem.json
import navItems from "./data/navItems.json"
// Import Navbar style
import './styles/Navbar.css';

/**
 * Function Navbar()
 * @returns Navigation bar component
 */
function Navbar() {
    return (
        <div className="container">
            <nav className='navbar'>
                <ul className="nav-items">
                    {navItems.map((navItem) => (
                            <RenderItem
                                objType = {navItem.objType}
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