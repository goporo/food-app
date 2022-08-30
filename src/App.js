import HomeUsage from 'components/Home/HomeUsage';
import { BrowserRouter as Router } from 'react-router-dom';


import './App.scss';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import HomeBanner from './components/Home/HomeBanner';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <HomeBanner />
        <HomeUsage />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
