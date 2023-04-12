// Import newsletter component.
import Newsletter from "./Newsletter";

// Import customer service component.
import CustomerService from "./CustomerService";

// Import additional services component.
import AdditionalServices from "./AdditionalServices";

// Import be in touch component.
import BeInTouch from "./BeInTouch";

// Import copyright components.
import Copyright from './Copyright';

/**
 * Function Footer()
 * @returns Footer bar component
 */
function Footer() {
    return (
        <section>
            <footer className="top">
                <Newsletter />
                <CustomerService />
                <AdditionalServices />
                <BeInTouch />
            </footer>
            <footer className="bottom">
                <Copyright />
            </footer>
        </section>
    );
}

export default Footer;