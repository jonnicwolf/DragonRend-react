import {Switch, Route} from 'react-router-dom';

function DragonRend() {
  return (
  <div>
    <Switch>
      <Route exact path="/" component={DragonRend}/>
      <Route path="/about" component={AboutPage}/>
      <Route path='/bugs' component={BugsPage} />
    </Switch>
  </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default DragonRend;
