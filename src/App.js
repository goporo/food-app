import { BrowserRouter as Router } from 'react-router-dom';


import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

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
