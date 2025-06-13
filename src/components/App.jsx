import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/Global.css';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from '../pages/Installers.jsx';
import ContactPage from '../pages/ContactPage.jsx';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/installers" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
