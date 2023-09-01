import PropTypes from 'prop-types';
import NavbarRightSide from './NavbarRightSide.jsx'
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding-inline: 20px;
    
    h1 {
      font-size: 1rem;
    }
    .left-side {
      background: pink;
    }
`;

Navbar.propTypes = {
    username: PropTypes.string,
}