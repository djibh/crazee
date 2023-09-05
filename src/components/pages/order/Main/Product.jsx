import PropTypes from 'prop-types'
import { styled } from 'styled-components';

export default function Product({title, imageSource, price}) {
  return (
    <ProductStyled className="product">
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
            <div className="description">
            <div className="title">{ title }</div>
            <div className="price">{ price }</div>
            <button className="add-button">Ajouter</button>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`

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

    .description {
      border: 1px solid fuchsia;
    }
`;

Product.propTypes = {
    title: PropTypes.string,
    imageSource: PropTypes.string,
    price: PropTypes.number
}