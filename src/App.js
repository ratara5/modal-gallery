import logo from './logo.svg';
import './App.css';

import {Route, Routes, useLocation} from 'react-router-dom';
import {Main} from './components/Main';
import {Modal} from './components/Modal';
import { Gallery } from './components/Gallery';

function App() {
  const location=useLocation();
  const background=location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Gallery/>}>
          <Route path="/img/:id" element={<Modal/>}/>
        </Route>
      </Routes>
      <Routes>
        <Route path="/img/:id" element={<Modal/>}/>
      </Routes>
    </div>
  );
}

export default App;
