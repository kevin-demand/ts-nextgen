import Preheader from '@/components/header/Preheader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/footer/Footer';



const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Preheader />
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
