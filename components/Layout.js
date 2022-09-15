import Preheader from './Preheader';
import Navigation from './Navigation';
import Footer from './Footer';


const Layout = ({ children, locale, locales, defaultLocale }) => (
  <div>
    <Preheader />
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
