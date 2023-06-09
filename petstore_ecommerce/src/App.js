// Import style.
import './App.css';

// Import Navbar components.
import Navbar from './components/Navbar';

// Import Footer components.
import Footer from './components/Footer';

// Import react router components.
import {BrowserRouter} from 'react-router-dom';
import MyRoutes from './pages/MyRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Navbar />
          <MyRoutes />
          <Footer />
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
