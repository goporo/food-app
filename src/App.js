import HomeCategory from 'components/Home/HomeCategory';
import HomeDelivery from 'components/Home/HomeDelivery';
import HomeIngredients from 'components/Home/HomeIngredients';
import HomeUsage from 'components/Home/HomeUsage';
import Test from 'components/Home/Test';
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
        <HomeIngredients />
        <HomeCategory />
        <HomeDelivery />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
