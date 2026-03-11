import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Volunteer from './pages/Volunteer';
import LinkTree from './pages/LinkTree';
import './i18n/config';
import './index.css';
import { Analytics } from '@vercel/analytics/react';

// A wrapper component to conditionally render global UI elements (Navbar, Footer, etc.)
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isLinkTree = location.pathname === '/linktree';

  if (isLinkTree) {
    return <>
      <Analytics />
      <main>{children}</main>
    </>; // Returns only the page, no Navbar/Footer
  }

  return (
    <>
      <Navbar />
      <Analytics />
      <SideNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/linktree" element={<LinkTree />} />
          </Routes>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
