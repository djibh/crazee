import { styled } from "styled-components";
import Menu from "./Menu";
import { theme } from "../../../../theme";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
// import Basket from "./Basket";

export default function Main() {
  const { isModeAdmin } = useContext(OrderContext)

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <Menu />
        { isModeAdmin && <Admin /> }
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
      position: relative;
    }
`;