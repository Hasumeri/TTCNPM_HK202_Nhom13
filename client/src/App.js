import logo from './logo.svg';
import './App.css';
import Signup from './components/SignupSignin/Signup';
import SignupSuccess from './components/SignupSignin/SignupSuccess';
import Signin from './components/SignupSignin/Signin';
import Forgotpass from './components/SignupSignin/Forgotpass';
import PasswordResetSuccess from './components/SignupSignin/PasswordResetSuccess';

import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    
    <div>
      <Switch>
        <Route exact path="/">
          <Signup />
        </Route>
        <Route  path="/signin">
          <Signin />
        </Route>
        <Route  path="/forgotpassword">
          <Forgotpass />
        </Route><Route  path="/signupsuccess">
          <SignupSuccess />
        </Route>
        <Route  path="/passwordresetsuccess">
          <PasswordResetSuccess />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
