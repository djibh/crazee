import { Link } from "react-router-dom";
import { styled } from "styled-components";
import github from "../../assets/img/github-logo.png"

export default function UnderContruction() {
  return (
    <UnderConstructionStyled>
        <Link to="https://github.com/djibh/crazee">
            <img src={github} />
            <b>Under Contruction</b>
        </Link>
    </UnderConstructionStyled>
  )
}

const UnderConstructionStyled = styled.button`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    bottom: 20px;
    margin: auto;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
    background-color: #e25549;
    font-size: 1.1rem;

    * {
        padding-inline: 4px;
    }

    &:hover {
        background-color: yellow;
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