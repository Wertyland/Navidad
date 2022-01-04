import React from "react";
import { Navbar,Container, Button  } from "react-bootstrap";

const NavBar = () => {

    return (
        <>
 <Container>
  <Navbar expand="x-lg" variant="dark" bg="danger">
    <Container>
      <Navbar.Brand href="#">WertyLand S.A</Navbar.Brand>
      <Button variant="light" size="lg" disabled>
       Inicio
      </Button> 
      <Button variant="light" size="lg" disabled>
        Proyectos
      </Button>
      <Button variant="light" size="lg" disabled>
        Nuestras Oficinas
      </Button>
      <Button variant="light" size="lg" disabled>
      Contacto
      </Button>
    
    </Container>
  </Navbar>
</Container>
      </>
    );
}

export default NavBar;