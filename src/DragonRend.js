import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import BugsPage from './pages/BugsPage'
import AboutPage from './pages/AboutPage'

function DragonRend() {
  return (
  <div>
    <Routes>
      <Route exact path="/" component={DragonRend}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/bugs' component={BugsPage} />
    </Routes>
  </div>
  );
}

export default DragonRend;
