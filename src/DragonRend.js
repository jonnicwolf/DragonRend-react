import {Switch, Route} from 'react-router-dom';

import BugsPage from './components/pages/BugsPage'
import AboutPage from './components/pages/AboutPage'

function DragonRend() {
  return (
  <div>
    <Switch>
      <Route exact path="/" component={DragonRend}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/bugs' component={BugsPage} />
    </Switch>
  </div>
  );
}

export default DragonRend;
