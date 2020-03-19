import React from 'react';
import './css/App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import First from './First';
import Frontpage from './Frontpage';
import Contact from './Contact';
import Gallery from './Gallery';
import About from './About';
import { BrowserRouter as Router, Switch, Route, BrowserRouter,} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Frontpage} />
      <Route exact path="/First" component={First} />
      <Route exact path="/Gallery" component={Gallery} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      </Switch>
      </BrowserRouter>
      
      
      
      </div>
      
   
  );
}

export default App;
