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
    <div>yoyoyoyoyoyo</div>
    <Routes>
      {/* <Route exact path="/" component={DragonRend}/>
      <Route path="/bugs" component={BugsPage}/>
      <Route path="/about" component={AboutPage}/> */}
      <Route path='/' element={<DragonRend/>}/>
      <Route path='/bugs' element={<BugsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    
  </div>
  );
}

export default DragonRend;
