import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';


function App() {
  return (
		<Router>
      <div className="App">
        <Header /> 
        <Hero /> 
        <Route path="/" exact component={Home} /> {/* exact means loading with the exact route */}
   			<Route path="/contact-us"  component={ContactUS}/>
   			<Route path="/post" component={Post} />  
      </div>
    </Router>
  );
}

export default App;
        
   