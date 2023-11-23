import { css, styled } from 'styled-components';
import { theme } from '../../theme';
import { ChangeEventHandler, ReactElement } from 'react';

type TextInputProps = {
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  placeholder: string,
  Icon: ReactElement,
  classname: string,
  version: string
}

export default function TextInput({ value, onChange, Icon, classname, version = "normal", ...extraProps }: TextInputProps) {
  return <TextInputStyled className={classname} version={version}>
      <div className='icon'>{Icon && Icon}</div>
      <input value={ value } onChange={ onChange } type="text" { ...extraProps } required/>
    </TextInputStyled>
}

const TextInputStyled = styled.div`
  display: flex;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.white};

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    width: 100%;
    background-color: ${theme.colors.white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }

    &:focus {
      outline: 0;
    }
  }

  /* ${(props) => {
    if (props.version === "normal") return extraStyleNormal
    if (props.version === "minimalist") return extraStyleMinimalist
  }} */

${({ version }) => extraStyle[version]}
`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+

    &:focus {
      outline: 0;
    }
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
}