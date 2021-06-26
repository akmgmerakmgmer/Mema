import './App.css';
import 'hover.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../src/assets/css/style.css'
import WOW from 'wowjs'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbars/Navbar1'
import Home from './pages/Home';
import Services from './pages/Services'
import Chat from './pages/Chat'
import Axios from './pages/Axios'
import Contact from './pages/Contact'
import FullPageLoading from './components/Loadings/FullPageLoading';
import { useEffect } from 'react';
const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#F9004D'
    },
    secondary:{
      main:'rgba(255,255,255,0.75)',
    },
    text:{
      secondary:'rgba(255,255,255,0.6)'
    }
  },
  typography:{
    fontFamily:'Montserrat',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  }
})

function App() {
  useEffect(()=>{
    new WOW.WOW({
    }).init();
  },[])
  return(
    <Router>
      <ThemeProvider theme={theme}>
      <FullPageLoading>
        <Navbar className="h-100">
          <Switch>
              <Route exact path="/">
                <Home/>                
              </Route>
              <Route exact path="/services">
                <Services/>
              </Route>
              <Route exact path="/chat">
                <Chat/>
              </Route>
              <Route exact path="/axios">
                <Axios/>
              </Route>
              <Route exact path="/contact">
                <Contact/>
              </Route>
          </Switch>
        </Navbar>
        </FullPageLoading>
      </ThemeProvider>
    </Router>
  )
}


export default App;
