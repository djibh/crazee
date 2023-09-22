import { styled } from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
// import Basket from "./Basket";

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        <div className="admin">ADMIN</div>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.main`
    display: grid;
    /* grid-template-columns: 25% 1fr;  will be used when basket implemented */
    grid-template-columns: 1fr;
    background: ${theme.colors.background_white};
    flex: 1;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    overflow-y: hidden;

    .menu-and-admin {
      overflow-y: hidden;
      display: grid;

      .admin {
        background: rgba(255, 192, 203, 0.85);
        height: 250px;
        border-bottom-right-radius: ${theme.borderRadius.extraRound};
        border-bottom-left-radius: ${theme.borderRadius.extraRound};
      }
    }
`;