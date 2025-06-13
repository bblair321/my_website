import { useState } from 'react'
import '../styles/Global.css'
import Footer from './Footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Body from './Body/Body.jsx'

function App() {
  return (
    <>
      <div className="layout">
        <main>
          <Header />
          <Body />
        </main>  
          <Footer />
      </div>
    </>
  );
}

export default App
