import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home'
import Checkout from './components/checkout/checkout';
import Login from './components/login/login'
import { useEffect } from 'react';
import { auth } from './lib/firebase'
import { useStateValue } from './Context/stateProvider';

function App() {

// eslint-disable-next-line no-empty-pattern
const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      }else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          } />
          <Route path='/login' element={<Login />} />
          <Route exact path='/' element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
