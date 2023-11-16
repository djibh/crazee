import { useState } from "react";
import { styled } from "styled-components";
import { fakeMenu } from "../../../../fakeData/fakeMenu"
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths"

export default function Menu() {
const [menu, setmenu] = useState(fakeMenu.MEDIUM)

  return (
    <MenuStyled>
      {
        menu.map(({ id, title, imageSource, price }) => {
          return <Card 
                    key={id} 
                    title={title} 
                    imageSource={imageSource} 
                    leftDescription={formatPrice(price)} />
        })
      }
    </MenuStyled>
  )
}

const MenuStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;
`;