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
          return <div key={idx} className="product">
            <div className="image">
              <img src={product.imageSource} alt={product.title} />
            </div>
            <div className="info-text">
              <div className="title">{ product.title }</div>
              <div className="description">
                <div className="price">{ product.price }</div>
                <button className="add-button">Ajouter</button>
              </div>
            </div>
          </div>
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

    .image {
      border: 1px solid fuchsia;
      width: 100px;
      height: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;