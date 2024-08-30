import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';

export default function Menu(props)
{
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cliente</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Fornecedores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Produtos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categorias</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Operacoes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Compra</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Venda</NavDropdown.Item>
            </NavDropdown>


            <NavDropdown title="Relatorios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cliente</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Fornecedores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Estoque</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Vendas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Compras</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href ="#home">Sobre</Nav.Link>
            <Nav.Link href ="#home">Sobre</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}