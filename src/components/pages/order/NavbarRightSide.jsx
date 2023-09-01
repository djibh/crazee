import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { styled } from 'styled-components';

export default function NavbarRightSide({ username }) {
  return <NavbarRightSideStyled className="right-side">
            <h1>Bonjour { username }</h1>
            <Link to="/"><button>Déconnexion</button></Link>
        </NavbarRightSideStyled>
}

NavbarRightSide.propTypes = {
    username: PropTypes.string,
}

const NavbarRightSideStyled = styled.div`
    background: purple;

`;