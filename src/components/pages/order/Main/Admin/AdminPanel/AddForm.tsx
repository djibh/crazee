import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
        <div className="image-preview">ImagePreview</div>
        <div className="input-fields">
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Image URL" />
            <input type="text" placeholder="Prix" />
        </div>
        <div className="submit-button">SubmitButton</div>
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
        background: green;
        grid-area: 4/ 2 / -1 / -1;
    }
    
`;