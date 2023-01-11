import React from 'react'
import { render } from 'react-dom'

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router} from 'react-router-dom' ;
render(
  // Wrap the <App /> in a provider
  <Router>
  <App />
  </Router>
  , document.querySelector('#root')
)


/*
* Location -> All data about where you are
* History -> All data about where you were
* Match -> All data about the current location w/re to query param etc etc
*/