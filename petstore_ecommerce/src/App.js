//import logo from './logo.svg';
// Import style
//import './App.css';
import Navbar from './components/Navbar';

// Import react router components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import web pages
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import NewItemsPage from './components/NewItemsPage';
import SpecialOffersPage from './components/SpecialOffersPage';
import TrackYourOrderPage from './components/TrackYourOrderPage';
import FAQsPage from './components/FaqsPage';
import RegisterLoginPage from './components/RegisterLoginPage';
import ShoppingCartPage from './components/ShoppingCartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Navbar/>
        </body>
      </div>

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
    </BrowserRouter>
  );
}

export default App;
