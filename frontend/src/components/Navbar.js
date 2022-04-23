import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipOt-vKF4ahrWl7vlG3Ac45wWIbcVR1g6aZ7RUlj=w1320-h1066-p-k-no"
            alt="logo"
            style={{ maxWidth: 80, marginTop: 10 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Order" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.ubereats.com/ca/store/tricity-japanese-salmon-bowl/WvSDddCeWYyigU1N0G8KJw">
                Uber Eats
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.skipthedishes.com/tricity-japanese-salmon-bowl">
                Skip The Dishes
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.doordash.com/store/tricity-japanese-salmon-bowl-cambridge-23025709/">
                DoorDash
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
