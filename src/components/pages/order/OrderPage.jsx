import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { theme } from "../../../theme";
import UnderContruction from "../../reusable-ui/UnderContruction";

export default function OrderPage() {
  const { username } = useParams()

  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username}/>
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