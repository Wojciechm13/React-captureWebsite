import React from 'react';
//Global style
import GlobalStyle from './components/GlobalStyle';
//Page components
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
//Router
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Switch> //stops rendering as soon as first address matches
      //exact means to render AboutUs when url is exact "/" and not for example "/work", because by default react will stop rendering as soon as it finds "/" even if we want /work
      <Route path="/" exact> 
        <AboutUs/>
      </Route>
      <Route path="/work">
        <OurWork/>
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>
      </Switch>
    </div>
  );
};

export default App;
