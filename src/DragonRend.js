import {Routes, Route} from 'react-router-dom';
//PAGES
import BugsPage from './pages/BugsPage';
import AboutPage from './pages/AboutPage';
//COMPONENTS
import DragonRendBanner from './components/DragonRendBanner';

function DragonRend() {
  return (
  <div>
    <DragonRendBanner/>
    
    <Routes>
      <Route path='/' element={<DragonRend/>}/>
      <Route path='/bugs' element={<BugsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    
  </div>
  );
}

export default DragonRend;
