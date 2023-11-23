import { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4} from 'uuid';
import OrderContext from "../../../../../../context/OrderContext";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";

const EMPTY_PRODUCT = { id:'', title: '', imageSource:'', price: 0}

export default function AddForm() {
  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const id = uuidv4()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newProductToAdd = {
        ...newProduct,
        id: id
    }
    handleAddProduct(newProductToAdd)
    setNewProduct(EMPTY_PRODUCT)

    displaySuccessMessage()
  }

  const displaySuccessMessage = () => { 
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
        }, 2000)
   }

  const handleChange = (e: any) => { 
      const { name, value } = e.target
      setNewProduct({ ...newProduct, [name]: value})
    }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className="image-preview">
            {
                newProduct.imageSource
                ? <img src={newProduct.imageSource} alt={newProduct.title} /> 
                : <div className="empty-image">Aucune image</div>
            } 
        </div>
        <div className="input-fields">
            <input name="title" value={newProduct.title} type="text" placeholder="Nom du produit (ex: Super Burger)" onChange={handleChange} />
            <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" onChange={handleChange} />
            <input name="price" value={newProduct.price ? newProduct.price : ''} type="text" placeholder="Prix" onChange={handleChange} />
        </div>
        <div className="submit">
            <button className="submit-button">Submit</button>
            {isSubmitted && <div className="submit-message">
                <FiCheck />
                <span>Ajouté avec succès</span>
            </div>}
        </div>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 8px;
    height: 100%;
    width: 70%;

    .image-preview {
        grid-area: 1 / 1 / 4 / 2;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }

        .empty-image {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid ${theme.colors.greyLight};
            line-height: 1.5;
            color: ${theme.colors.greySemiDark};
            border-radius: ${theme.borderRadius.round};

        }
    }
    .input-fields {
        background: blue;
        grid-area: 1 / 2 / 4 / -1;

        display: grid;
    }
    .submit {
        grid-area: 4/ 2 / -1 / -1;
        background: green;
        display: flex;
        align-items: center;
        gap: 0.5em;
    }
    .submit-button {
        width: 50%;
    }
    .submit-message {
        display: flex;
        align-items: center;
        width: 50%;
    }  
`;