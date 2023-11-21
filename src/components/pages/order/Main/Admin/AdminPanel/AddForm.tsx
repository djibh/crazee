import { useContext, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";

const EMPTY_PRODUCT = { id:'', title: 'Nouveau burger', imageSource:'', price: 14}

export default function AddForm() {
  const { handleAddProduct } = useContext(OrderContext)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const newProduct2 = {
    id: new Date().getTime(),
    title: 'Nouveau produit',
    imageSource: 'https://burgerkingfrance.twic.pics/img/products/7/5a/75a852b5-32f1-4c0b-b7e9-4182ef150f51_?twic=v1/contain=600x600',
    price: 8.5
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    handleAddProduct(newProduct)
  }

  const handleChange = (e: any) => { 
      const newValue = e.target.value
      const name = e.target.name
      setNewProduct({ ...newProduct, [name]: newValue})
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