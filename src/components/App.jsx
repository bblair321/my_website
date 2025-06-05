import { useState } from 'react'
import '../styles/Global.css'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function App() {
  return (
    <>
      <div className="layout">
        <main>
          <Header />
        </main>  
          <Footer />
      </div>
    </>
  );
}

export default App
