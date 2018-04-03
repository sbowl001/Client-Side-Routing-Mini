import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Home, About, Contact} from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation /> 
    <Route exact path= "/" component={Home}/>
    <Route path= "/about" component={About}/>
    <Route path= "/contact" component={Contact}/>

  </div>
)
 
//   Step 6: create 3 <Route /> setting their path prop equal to /, /about, /contact with their respective components.
// be sure to incluce the exact prop on the root component for / to make sure that it's rendering the exact component and not all the other components.
// Step 7: you should now be able to type /, /about, /contact after localhost:PORT/ 


export default App;
