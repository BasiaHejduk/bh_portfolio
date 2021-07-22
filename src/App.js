import './App.scss';
import Home from "./components/home/Home";
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
