import React from 'react'
import './NavBar.css';

export default () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="menu" role="navigation">
          <li className="resumee-brand"><a href="#">Resumme Generator</a></li>
          <li><a href="#">Generate CV</a></li>
          <li><a href="#">Add Data</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    </header>
  )
}
