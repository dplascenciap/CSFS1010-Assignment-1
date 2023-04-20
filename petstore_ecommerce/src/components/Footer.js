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
                <div className="sections">
                    <Newsletter />
                    <CustomerService />
                    <AdditionalServices />
                    <BeInTouch />
                </div>
            </footer>
            <footer className="bottom">
                <div className="sections">
                    <Copyright />
                </div>
            </footer>
        </section>
    );
}

export default Footer;