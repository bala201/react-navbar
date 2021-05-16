import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ReactPlayer from 'react-player'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
    
      <Navbar bg="danger" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      
        <Navbar.Brand >
          <img src={logo} width="40px" height="40px" />{'      '}
          Logo 
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
          
          <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
          <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
          <NavDropdown.Item href="#products/badham">Badham</NavDropdown.Item>
          <NavDropdown.Divider/>
          <NavDropdown.Item href="#products/boost">Boost</NavDropdown.Item>

          </NavDropdown>
        <Nav.Link href="#products">Blog</Nav.Link>
        <Nav.Link href="#products">About Us</Nav.Link>
        <Nav.Link href="#products">Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      
      </Navbar>
      <div>

        <ReactPlayer controls width="1000px" height="1000px" url="https://youtu.be/vlDzYIIOYmM" />
      
      </div>
      <div className="content">
      Hi
      </div>
      <div>
      <img src="https://nettv4u.com/imagine/31-01-2019/pavithra.jpg" alt="..." class="rounded-bottom"></img>
      </div>

      <div className="content">
      Hi
      </div>
      <div>
      <img src="https://wallpapercave.com/wp/wp2596622.jpg" alt="..." class="rounded-bottom"></img>
      </div>

      <div className="content">
      Hi
      </div>
      <div>
      <img src="https://cdn.icowboysradio.com/cuckooradio/uploads/2021/02/5-min-8.jpg" alt="..." class="rounded-bottom"></img>
      </div>

    </div>
  );
}

export default App;
