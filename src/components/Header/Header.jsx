import { Logo, Nav, HeaderComponent, NavRegister, SpecialNavItem, NavItem } from "./Header.styled";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <HeaderComponent>
            {/* <Logo to="/">ST PIZZA</Logo> */}
            <Nav>
                <Logo to="/">ST PIZZA</Logo>
                <Link to='/'>Home</Link>
                <Link to='/'>Menu</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Contact</Link>
            </Nav>
            <NavRegister>
                <NavItem to='/'>Login</NavItem>
                <SpecialNavItem to='/'>Register</SpecialNavItem>
            </NavRegister>
        </HeaderComponent>
    );
  };
  
  export default Header;