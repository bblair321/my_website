import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../styles/Global.css';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import HomePage from '../pages/HomePage.jsx';
import ServicesPage from '../pages/Installers.jsx';
import TarkovPage from '../pages/TarkovPage.jsx';
import ValheimPage from '../pages/ValheimPage.jsx';
import SchedulePage from '../pages/SchedulePage.jsx';
import ModsPage from '../pages/Mods.jsx';

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/installers" element={<ServicesPage />} />
          <Route path="/installers/tarkov" element={<TarkovPage />} />
          <Route path="/installers/valheim" element={<ValheimPage />} />
          <Route path="/installers/schedule" element={<SchedulePage />} />
          <Route path="/mods" element={<ModsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
