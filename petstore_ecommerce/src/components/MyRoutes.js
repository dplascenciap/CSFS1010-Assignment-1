// Import react router components
import { Routes, Route } from 'react-router-dom';

// Import web page components
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import NewItemsPage from './NewItemsPage';
import SpecialOffersPage from './SpecialOffersPage';
import TrackYourOrderPage from './TrackYourOrderPage';
import FAQsPage from './FaqsPage';
import RegisterLoginPage from './RegisterLoginPage';
import ShoppingCartPage from './ShoppingCartPage';

/**
 * Function MyRoutes()
 * @returns Home page component
 */
 function MyRoutes() {
    return (
        <Routes>
            <Route path = "/"               element = {<HomePage />} />
            <Route path = "/shop"           element = {<ShopPage />} />
            <Route path = "/newItems"       element = {<NewItemsPage />} />
            <Route path = "/specialOffers"  element = {<SpecialOffersPage />} />
            <Route path = "/trackYourOrder" element = {<TrackYourOrderPage />} />
            <Route path = "/faqs"           element = {<FAQsPage />} />
            <Route path = "/registerLogin"  element = {<RegisterLoginPage />} />
            <Route path = "/shoppingCart"   element = {<ShoppingCartPage />} />
        </Routes>
    )
}

export default MyRoutes;