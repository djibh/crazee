import PropTypes from 'prop-types';
import NavbarRightSide from './NavbarRightSide.jsx'
import { styled } from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      <div className="left-side">LEFT SIDE</div>
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}
const NavbarStyled = styled.nav`
    background: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    
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