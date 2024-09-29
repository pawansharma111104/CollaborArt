import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import USP from './pages/USP';
import FutureDevelopment from './pages/FutureDevelopment';
import './App.css'; // Add global styles here

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/usp" element={<USP />} />
            <Route path="/future" element={<FutureDevelopment />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
