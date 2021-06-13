import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import AddFood from './components/views/AddFood'
import ModifyFood from './components/views/ModifyFood'
import DeleteFood from './components/views/DeleteFood'
import DeleteFood2 from './components/views/DeleteFood2'
import ManagerContextProvider from './components/contexts/ManagerContext'
import FoodContextProvider from './components/contexts/FoodContext';

function App() {
  return (
    
    <Router>    
      <ManagerContextProvider>
        <FoodContextProvider>         
            
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/addfood' component={AddFood} />
              <Route exact path='/modifyfood' component={ModifyFood} />
              <Route exact path='/deletefood' component={DeleteFood} />
              <Route exact path='/deletefood/2' component={DeleteFood2} />

              {/* <Route exact path='/deletefood'>
                <DeleteFood/>
              </Route>
              <Route exact path='/deletefood/2'>
                <DeleteFood2/>
              </Route> */}
            </Switch>
          
        </FoodContextProvider>
      </ManagerContextProvider>
    </Router>
  );
}

export default App;
