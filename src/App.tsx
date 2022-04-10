import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Interests from "./components/Interests";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./styles/App.scss";

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Interests />
      </main>
      <Footer />
      <a href='#' className='btn--round--hover'>
        <FontAwesomeIcon icon={faArrowUp} size='lg' />
      </a>
    </div>
  );
}

export default App;
