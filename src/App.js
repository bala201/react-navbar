import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import Home from './Home';
function App() {
  return (
    <div className="App">
    
      <Navbar bg="secondary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      
        <Navbar.Brand >
          <img src={logo} width="40px" height="40px" />{'      '}
          SMS 
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Academic Year">
          
          <NavDropdown.Item href="#year/21">2021</NavDropdown.Item>
          <NavDropdown.Item href="#year/20">2020</NavDropdown.Item>
          <NavDropdown.Item href="#year/19">2019</NavDropdown.Item>
          <NavDropdown.Divider/>
              <NavDropdown.Item href="#year/previous">Previous</NavDropdown.Item>

          </NavDropdown>
        <Nav.Link href="#student">Student</Nav.Link>
        <Nav.Link href="#marks">Marks</Nav.Link>
        <Nav.Link href="#attendance">Attendance</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>

        
        <input type="text" placeholder="Search.." name="search"></input>
       
        
        </Nav>
         
        </Navbar.Collapse>
        
        <div>
        <button class="btn btn-success" align="center">Admin</button>{' '}
        
        </div>
       
        
      </Navbar>

      <Home/>
      
    </div>
  );
}

export default App;
