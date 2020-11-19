import './App.css';
import logo from './img/header-logo.png';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';
import InfoPage from './components/InfoPage';
import Contacts from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <main className="container">
        <div className="row">
          <div className="col">
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/about' component={InfoPage} />
            <Route exact path='/contacts' component={Contacts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
