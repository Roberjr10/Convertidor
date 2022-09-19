import Header from './components/header';
import './App.css';
import Convertidor from './components/Convertidor';
import Guardados from './components/Guardados';
import Footer from './components/Footer';

function App() {
  


  return (
    <div className="App">
      <Header></Header>
      <Convertidor></Convertidor>
      <Guardados></Guardados>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
