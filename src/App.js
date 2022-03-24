import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Navbar from './Components/navBar/navbar';
import ProductNavbar from './Components/productNavbar/productNavbar';
import MappingContent from './Components/mappingContent/mappingContent';
import DrawerBar from './Components/drawer/drawer';

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
      <DrawerBar/>
    </>
  );
}

export default App;
