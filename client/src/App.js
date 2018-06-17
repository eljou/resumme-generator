import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navigation/NavBar';
import Profile from './containers/Profile';
import Footer from './components/sections/footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <main>
          <Profile />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
