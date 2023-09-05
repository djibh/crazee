import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";

export default function Menu() {
const [menu, setmenu] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {
        menu.map((product, idx) => {
          return <div key={idx} className="product">{ product.title }</div>
        })
      }
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .product {
    background: red;
    width: 224px;
    height: 330px;
    box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;