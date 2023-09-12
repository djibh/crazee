import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UnderContruction from "../../reusable-ui/UnderContruction";
import { theme } from "../../../theme";

export default function OrderPage() {
  const { username } = useParams()

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username as string}/>
        <Main />
      </div>
      <UnderContruction />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;