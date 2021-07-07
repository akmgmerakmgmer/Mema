import './App.css';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/css/style.css'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbars/Navbar1'
import Home from './pages/Home';
import Services from './pages/Services'
import Chat from './pages/Chat'
import Axios from './pages/Axios'
import Contact from './pages/Contact'
import FullPageLoading from './components/Loadings/FullPageLoading';
import ScrollToTop from './components/ScrollTop/ScrollTop';
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
  return(
    <Router>
      <ThemeProvider theme={theme}>
        <FullPageLoading>
          <Navbar className="h-100">
            <ScrollToTop>
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
            </ScrollToTop>
          </Navbar>
        </FullPageLoading>
      </ThemeProvider>
    </Router>
  )
}


export default App;
