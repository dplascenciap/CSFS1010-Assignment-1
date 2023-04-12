// Import newsletter component.
import Newsletter from "./Newsletter";

// Import customer service component.
import CustomerService from "./CustomerService";

// Import additional services component.
import AdditionalServices from "./AdditionalServices";

/**
 * Function Footer()
 * @returns Footer bar component
 */
function Footer() {
    return (
        <div>
            <Newsletter />
            <CustomerService />
            <AdditionalServices />
        </div>
    );
}

export default Footer;