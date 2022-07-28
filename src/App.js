import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home'
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/checkout' element={<Checkout />} />
          
          <Route exact path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
