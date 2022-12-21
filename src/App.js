
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './views/Home/Home';
import Apply from './views/Apply';

function App() {
  return (
    <Router>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/apply' element={<Apply/>} />
    </Routes>
    </Router>
  );
}

export default App;
