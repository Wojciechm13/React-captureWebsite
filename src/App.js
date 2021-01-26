import React from 'react';
//Global style
import GlobalStyle from './components/GlobalStyle';
//Page components
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
//Router
import {Switch, Route, useLocation} from 'react-router-dom';
//Animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}> //stops rendering as soon as first address matches
      //exact means to render AboutUs when url is exact "/" and not for example "/work", because by default react will stop rendering as soon as it finds "/" even if we want /work
      <Route path="/" exact> 
        <AboutUs/>
      </Route>
      <Route path="/work" exact>
        <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail/>
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
