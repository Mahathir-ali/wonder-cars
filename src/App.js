import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header';
import Showroom from './components/showroom/Showroom';

function App() {
  return (
    <div className="body">
      <Header></Header>
      <Showroom></Showroom>
      <Footer></Footer>
    </div>
  );
}

export default App;
