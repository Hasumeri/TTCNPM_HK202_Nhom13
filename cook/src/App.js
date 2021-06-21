import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signin from './components/views/Signin'
import Pending from './components/views/Pending'
import Processing from './components/views/Processing'
import Completed from './components/views/Completed'
import Food from './components/views/Food'
import CookContextProvider from './components/contexts/CookContext'
import FoodContextProvider from './components/contexts/FoodContext'
import OrderContextProvider from './components/contexts/OrderContext'

function App() {
  return (
    <CookContextProvider>
      <FoodContextProvider>
        <OrderContextProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={Pending} />
              <Route exact path='/processing' component={Processing} />
              <Route exact path='/completed' component={Completed} />
              <Route exact path='/food' component={Food} />
              <Route exact path='/signin' component={Signin} />
            </Switch>
          </Router>
        </OrderContextProvider>
      </FoodContextProvider>
    </CookContextProvider>
  );
}

export default App;
