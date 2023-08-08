import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { BsPersonCircle } from "react-icons/bs"

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (event) => { 
    event.preventDefault()
    setInputValue("")
    navigate(`order/${ inputValue }`)
  }

  const handleChange = (event) => { 
    setInputValue(event.target.value)
   }

  return (
    <LoginFormStyled action="submit" onSubmit={ handleSubmit }>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
          <div className="input-container">
            <BsPersonCircle className="icon"/>
            <input value={inputValue} onChange={ handleChange } type="text" placeholder="Entrez votre prénom" required />
          </div>
          <button>Accéder à mon espace</button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-container {
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      background-color: white;
      border: none;
      font-size: 15px;
      color: #17161a;
      width: 100%;
      &::placeholder {
        color: lightgrey;
      }
    }
  }

`;