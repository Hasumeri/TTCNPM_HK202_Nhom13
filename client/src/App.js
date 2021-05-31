import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'
import UserContextProvider from './components/contexts/UserContext'

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    </UserContextProvider>
    
  );
}

export default App;
