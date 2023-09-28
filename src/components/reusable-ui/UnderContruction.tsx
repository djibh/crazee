import { Link } from "react-router-dom";
import { styled } from "styled-components";
import github from "../../assets/img/github-logo.png"

export default function UnderContruction() {
  return (
    <UnderConstructionStyled>
        <Link to="https://github.com/djibh/crazee">
            <img src={github} />
            <b>Under Construction</b>
        </Link>
    </UnderConstructionStyled>
  )
}

const UnderConstructionStyled = styled.button`
    position: fixed;
    bottom: 20px;
    margin: auto;
    padding: 0.5rem 0rem;

    background-color: #e25549;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    
    border: 1px solid transparent;
    border-radius: 5px;

    font-size: 1.1rem;

    * {
        padding-inline: 0.5rem;
    }

    &:hover {
        background-color: #c3807a;
    }

    a {
        display: flex;
        align-items: center;
        color: inherit;
    }

    img {
        width: 30px;
    }

`;