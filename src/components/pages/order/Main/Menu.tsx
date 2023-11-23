import { useContext } from "react";
import { styled } from "styled-components";
import { theme } from "../../../../theme";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths"
import OrderContext from "../../../../context/OrderContext";

const DEFAULT_IMAGE = "/images/coming-soon.png"

export default function Menu() {
  const { menu, isModeAdmin, handleProductDelete } = useContext(OrderContext)

  return (
    <MenuStyled>
      {
        menu.map(({ id, title, imageSource, price }) => {
          return <Card 
                    key={id} 
                    title={title} 
                    imageSource={imageSource ? imageSource : DEFAULT_IMAGE } 
                    leftDescription={formatPrice(price)} 
                    hasDeleteButton={isModeAdmin}
                    onDelete={() => handleProductDelete(id)}
                  />
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