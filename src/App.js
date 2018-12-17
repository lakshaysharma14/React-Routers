import React, { Component } from 'react';
import Navbar from './component/Navbar.js';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home.js'
import About from './component/About.js'
import Contact from './component/Contact.js';
import Post from './component/Post.js'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      
      <div className="App">
        
        <Navbar />
        
          <Route path='/home' component ={Home} />
          <Route path='/about' component ={About} />
          <Route path='/contact' component ={Contact} />
          <Route path="/:post_id" component ={Post} />

      </div>
      

    </BrowserRouter>
      
    );
  }
}

export default App;
