import PropTypes from 'prop-types';
import NavbarRightSide from './NavbarRightSide.jsx'
import { styled } from "styled-components";
import Logo from "../../reusable-ui/Logo.jsx"
import { theme } from '../../../theme/index.js';

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo />
      <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background: ${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding-inline: 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
    
    .left-side {
      background: pink;
    }
`;

Navbar.propTypes = {
    username: PropTypes.string,
}