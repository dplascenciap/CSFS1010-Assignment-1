// Import style
import './App.css';

// Import Navbar components
import Navbar from './components/Navbar';

// Import react router components
import {BrowserRouter} from 'react-router-dom';
import MyRoutes from './components/MyRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <Navbar/>
          <MyRoutes/>
          <footer>
            <p>This is a footer</p>
          </footer>
        </body>
      </div>
    </BrowserRouter>
  );
}

export default App;
