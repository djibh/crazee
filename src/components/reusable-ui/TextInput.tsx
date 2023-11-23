import { styled } from 'styled-components';
import { theme } from '../../theme';
import { ChangeEventHandler, ReactElement } from 'react';

type TextInputProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  Icon: ReactElement,
  classname: string
}

export default function TextInput({ value, onChange, Icon, classname, ...extraProps }: TextInputProps) {
  return <InputStyled className={classname}>
      <div className='icon'>{Icon && Icon}</div>
      <input value={ value } onChange={ onChange } type="text" { ...extraProps } required/>
    </InputStyled>
}

const InputStyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;

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

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-inline: ${theme.spacing.sm} ${theme.spacing.xs};
      color: ${theme.colors.greySemiDark};
    }  
`;