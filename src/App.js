import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenuBar from './Components/Includes/TopMenuBar';
import Home from './Components/Home/Home';
import Footer from './Components/Includes/Footer';

function App() {
  return (
    <div>
        <Router>
          <TopMenuBar />
            <Routes>
              <Route path="/" index element={<Home />} />
            </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
