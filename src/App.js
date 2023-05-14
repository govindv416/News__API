import './App.css';
import About from './Components/About';
import Hearo from './Components/Hearo';
import Navbar from './Components/Navbar';
import Classes from './Components/classes';
import Registration from './Components/Registration';
import Plan from './Plan';
import Galary from './Galary';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
   <div>
   <Navbar title={"Govind"} about ={"Abbbb"} />
   <Hearo/>
   <About/>
   <Classes/>
   <Registration/>
   <Plan/>
   <Galary/>
   <Contact/>
   <Footer/>
    </div>

  );
}

export default App;
