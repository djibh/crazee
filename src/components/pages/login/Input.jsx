import PropTypes from 'prop-types'
import { styled } from 'styled-components';

export default function Input({ value, onChange, Icon, ...extraProps }) {
  return <InputStyled>
      {Icon}
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
    .form-icons {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }  
`;
    
Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  Icon: PropTypes.shape
}