import PropTypes from 'prop-types'
import { styled } from 'styled-components';

export default function Product({title, imageSource, price}) {
  return (
    <ProductStyled className="product">
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
            <div className="title">{ title }</div>
            <div className="description">
                <div className="price">{ price }</div>
                <button className="add-button">Ajouter</button>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    width: 220px;
    height: 300px;
    background: red;
    box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);

    .image {
      border: 1px solid yellow;
      width: 100%;
      height: auto;
      margin-top: 30px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .description {
      border: 1px solid blue;
    }
`;

Product.propTypes = {
    title: PropTypes.string,
    imageSource: PropTypes.string,
    price: PropTypes.number
}