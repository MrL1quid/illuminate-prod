import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import Return from '../../UI/Return';
import scrollStyles from './ScrollStyles.module.css'
import "./App.css"

function App() {
  return (
    <div className={`CVApp ${scrollStyles.scr}`}>
      <Return/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inner" element={<Inner/>}/>
      </Routes>
    </div>
  );
}

export default App;
