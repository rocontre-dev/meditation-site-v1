import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useScrollToTop from '../hooks/useScrollToTop';

/**
 * Main layout wrapper that provides consistent Header and Footer across all pages.
 * Uses React Router's Outlet to render the current page content.
 */
const MainLayout = () => {
  // Scroll to top on every route change
  useScrollToTop();

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;