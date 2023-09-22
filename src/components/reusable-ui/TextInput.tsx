import PropTypes from 'prop-types'
import { styled } from 'styled-components';
import { theme } from '../../theme';


export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return <InputStyled>
      {Icon && Icon}
      <input value={ value } onChange={ onChange } type="text" { ...extraProps } />
    </InputStyled>
}

const InputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    & * {
      font-size: ${theme.fonts.size.SM};
    }
    
    input {
      background-color: ${theme.colors.white};
      border: none;
      color: ${theme.colors.dark};
      width: 100%;
      
      &::placeholder {
        color: ${theme.colors.greyMedium};
      }
    }
`;
    
TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  Icon: PropTypes.element
}