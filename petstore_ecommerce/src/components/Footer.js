// Import newsletter component.
import Newsletter from "./Newsletter";

// Import customer service component.
import CustomerService from "./CustomerService";

// Import additional services component.
import AdditionalServices from "./AdditionalServices";

// Import be in touch component.
import BeInTouch from "./BeInTouch";

/**
 * Function Footer()
 * @returns Footer bar component
 */
function Footer() {
    return (
        <footer>
            <Newsletter />
            <CustomerService />
            <AdditionalServices />
            <BeInTouch />
        </footer>
    );
}

export default Footer;