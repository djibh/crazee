import { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4} from 'uuid';
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = { id:'', title: 'Nouveau burger', imageSource:'', price: 14}

export default function AddForm() {
  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const id = uuidv4()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const newProductToAdd = {
        ...newProduct,
        id: id
    }
    handleAddProduct(newProductToAdd)
  }
  const handleChange = (e: any) => { 
      const { name, value } = e.target
      setNewProduct({ ...newProduct, [name]: value})
    }

  return (
    <AddFormStyled onSubmit={handleSubmit}>
        <div className="image-preview">ImagePreview</div>
        <div className="input-fields">
            <input name="title" value={newProduct.title} type="text" placeholder="Nom" onChange={handleChange} />
            <input name="imageSource" value={newProduct.imageSource} type="text" placeholder="Image URL" onChange={handleChange} />
            <input name="price" value={newProduct.price ? newProduct.price : ''} type="text" placeholder="Prix" onChange={handleChange} />
        </div>
        <button className="submit-button">Submit</button>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
    border: 1px solid black;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;

    .image-preview {
        background: red;
        grid-area: 1 / 1 / 4 / 2;
    }
    .input-fields {
        background: blue;
        grid-area: 1 / 2 / 4 / -1;

        display: grid;
    }
    .submit-button {
        width: 50%;
        grid-area: 4/ 2 / -1 / -1;
        background: green;
    }
    
`;