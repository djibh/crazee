import PropTypes from 'prop-types'
import { styled } from 'styled-components';


export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return <InputStyled>
      {Icon && Icon}
      <input value={ value } onChange={ onChange } type="text" { ...extraProps } />
    </InputStyled>
}

const InputStyled = styled.div`
    background-color: white;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    & * {
      font-size: 15px;
    }
    
    input {
      background-color: white;
      border: none;
      color: #17161a;
      width: 100%;
      &::placeholder {
        color: lightgrey;
      }
    }
`;
    
TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  Icon: PropTypes.shape
}