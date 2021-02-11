import React,{useState} from 'react';
import {} from 'react-bootstrap'; 
import {BsGridFill,BsFillPersonPlusFill,BsList} from 'react-icons/bs';
import './App.css';
import Card from "./Components/Card"
import List from "./Components/List"
import NewUser from "./Components/NewUser"


function App() {

  const [mode, setMode] = useState(1)

  const grid = () =>{
    setMode(1)
  }

  const list = ()=>{
    setMode(2)
  }

  const newuser = ()=>{
    setMode(3)
  }
  return (
   <div>
     <div className="Navbar">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={grid}>
                <a className="nav-link active" aria-current="page" href="#"><BsGridFill/>Card View</a>
              </li>
              <li className="nav-item ml-3" onClick={list}>
                <a className="nav-link" ><BsList/>List View</a>
              </li>
              <li className="nav-item ml-3" onClick={newuser}>
                <a className="nav-link" ><BsFillPersonPlusFill/>New Customer</a>
              </li>
            </ul>
            <form className="d-flex ml-auto">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary " type="submit">Search</button>
            </form>
          </div>
        </div>
       </nav>
     </div>
     <div className="container w-100 p-2">
           {  mode===1 ? 
             <div className="row row-cols-3 "> 
             <Card className="col ml-5" style={"width: 18rem;"} /> </div>: mode===2 ? <List /> :<NewUser/>
           }
    </div>
  </div> 
    )
}

export default App;
