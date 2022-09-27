import Preheader from '../header/Preheader';
import Navigation from '../Navigation';
import Footer from '../footer/Footer';



const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Preheader />
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
