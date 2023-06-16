import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {Fetchdata} from './components/Fetchdata'
import {Footer} from './components/Footer'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Fetchdata h="THE WEBSITE BUILD WITH THE NEWS API" /> }></Route>
          <Route path="/general" element={<Fetchdata h="GENERAL" cat="general"/>}></Route>
          <Route path="/business" element={<Fetchdata h="BUSINESS" cat="business"/>}></Route>
          <Route path="/entertainment" element={<Fetchdata  h="ENTERTAINMENT" cat="entertainment"/>}></Route>
          <Route path="/health" element={<Fetchdata h="HEALTH" cat="health"/>}></Route>
          <Route path="/science" element={<Fetchdata h="SCIENCE" cat="science"/>}></Route>
          <Route path="/sports" element={<Fetchdata h="SPORTS" cat="sports"/>}></Route>
          <Route path="/technology" element={<Fetchdata h="TECHNOLOGY" cat="technology"/>}></Route>
          
        </Routes>
        <Footer></Footer>
        
      </Router>
      
      
    </div>
  );
}

export default App;
