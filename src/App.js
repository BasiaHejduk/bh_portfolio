import './App.scss';
import Home from "./components/home/Home";
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import MobileMenu from './components/mobile-menu/MobileMenu';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <MobileMenu></MobileMenu>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
