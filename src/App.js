import './App.css';
import Home from "./components/home/Home.js"
import {Routes,Route} from "react-router-dom"
import About from './components/about/About';
import Explore from "./components/explore/Explore"
import Reviews from "./components/Reviews/Reviews"
import FAQ from "./components/FAQ/FAQ"
import Navs from "./components/nav/Nav"

import Footer from "./components/footer/Footer"
function App() {






  return (
    <div className="App">
          <Navs  /> 

    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Explore" element={<Explore   />} />
        <Route path="/Reviews" element={<Reviews />} />
        <Route path="/FAQ" element={<FAQ />} />


      </Routes>
        <Footer />
    </div>
  )
}

export default App;
