import { BrowserRouter as Router } from 'react-router-dom';


import './App.scss';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
