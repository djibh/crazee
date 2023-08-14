import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { IoChevronForward } from "react-icons/io5"
import { BsPersonCircle } from "react-icons/bs"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

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
        <TextInput 
          value={inputValue} 
          onChange={ handleChange } 
          placeholder={"Entrez votre prénom"} 
          Icon={<BsPersonCircle className="form-icons"/>} 
          required
        />
        <PrimaryButton 
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward />}
        /> 
      </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
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

  .form-icons {
      margin-right: 8px;
      color: #93a2b1;
    }  
`;