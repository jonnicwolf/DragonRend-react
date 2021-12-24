import {Router, Routes, Route, Link} from 'react-router-dom';
//PAGES
import BugsPage from './pages/BugsPage'
import AboutPage from './pages/AboutPage'

//COMPONENTS
import DragonRendBanner from './components/DragonRendBanner'



function DragonRend() {
  return (
  <div>
    <DragonRendBanner/>
    <Routes>
      <Route exact path="/" component={DragonRend}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/bugs' component={BugsPage} />
    </Routes>
  </div>
  );
}

export default DragonRend;
