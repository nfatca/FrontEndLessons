import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return(
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App;