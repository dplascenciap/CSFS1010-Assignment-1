// Import newsletter component.
import Newsletter from "./Newsletter";

// Import customer service component.
import CustomerService from "./CustomerService";

/**
 * Function Footer()
 * @returns Footer bar component
 */
function Footer() {
    return (
        <div>
            <Newsletter/>
            <CustomerService/>
        </div>
    );
}

export default Footer;