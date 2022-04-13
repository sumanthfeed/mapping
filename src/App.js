import logo from './logo.svg';
import './App.css';
// import { Route, Switch } from 'react-router';
import ProductNavbar from './Components/productNavbar/productNavbar';
import MappingContent from './Components/mappingContent/mappingContent';
import DrawerBar from './Components/drawer/drawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Login from './Components/login/login';
import ForgotPassword from './Components/login/forgotpassword';
function App() {
  return (
    <>
      {/* <div style={{ display: 'flex' }}>
        <div style={{ border: '1px solid grey', width: '15%' }}>
          <img src={`${process.env.PUBLIC_URL}/assets/feedtablogo.png`} alt="" width="30%" />
        </div>
        <div style={{ width: '100%' }}> */}
          {/* <Navbar /> */}
          {/* <ProductMapping/> */}
          {/* <ProductNavbar/> */}
          {/* <MappingContent /> */}
        {/* </div>

      </div> */}
      {/* <DrawerBar/> */}
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/contentview' component={DrawerBar}></Route>
          <Route path='/forgotpassword' component={ForgotPassword}></Route>
          <Redirect to='/contentview'/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
