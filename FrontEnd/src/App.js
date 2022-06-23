import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Update from './Update'
import Home from './Home'

/**
* @author
* @function 
**/

 const App = (props) => {
  return(
 <>
 <Router>
   <Routes>
     <Route path='/' exact element={<Home />} />
     <Route path='/update/:id' element={<Update />} />
   </Routes>
 </Router>
 </>
   )

 }

 export default App;