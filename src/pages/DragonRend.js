import {Routes, Route} from 'react-router-dom';
//PAGES
import BugsPage from './BugsPage';
import AboutPage from './AboutPage';
//COMPONENTS
import DragonRendBanner from '../components/DragonRendBanner';
import MainMenu from '../components/MainMenu';
function DragonRend() {
  return (
  <div>
    <DragonRendBanner/>
    <MainMenu/>
  </div>
  );
}

export default DragonRend;
