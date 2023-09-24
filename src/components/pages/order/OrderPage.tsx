import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import UnderContruction from "../../reusable-ui/UnderContruction";
import { theme } from "../../../theme";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext"

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin
  }

  return (
    <OrderContext.Provider value={ orderContextValue }>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
        <UnderContruction />
      </OrderPageStyled>
    </OrderContext.Provider>
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