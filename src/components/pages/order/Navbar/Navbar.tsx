import PropTypes from 'prop-types';
import NavbarRightSide from './NavbarRightSide.jsx'
import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo.jsx"
import { theme } from '../../../../theme';
import { refreshPage } from '../../../../utils/window.js';

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <Logo className={"logo-order-page"} onClick={refreshPage}/>
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
    border-bottom: 1px solid ${theme.colors.greyLight};
    
    .logo-order-page {
      cursor: pointer;
    }
`;

Navbar.propTypes = {
    username: PropTypes.string,
}