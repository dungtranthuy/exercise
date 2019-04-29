import React from 'react'
import '../styles/main.scss'

const App = () => (
  <div className="wrapperPage">
    <div className="popularStoreContainer">
      <h1>My React App!</h1>
      <header className="scroll">
        <nav className="vertical-align-middle">
          <a href="http://iamsteve.me/blog" className="nav-item">
            Blog
          </a>
          <a href="http://iamsteve.me/portfolio" className="nav-item">
            Portfolio
          </a>
          <a href="http://iamsteve.me/downloads" className="nav-item">
            Downloads
          </a>
          <a href="http://iamsteve.me/about" className="nav-item">
            About
          </a>
          <a href="http://iamsteve.me/contact" className="nav-item">
            Contact
          </a>
        </nav>
      </header>
    </div>
  </div>
)

export default App
