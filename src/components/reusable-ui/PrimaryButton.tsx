import { styled } from 'styled-components';
import { theme } from '../../theme';
import { ReactElement } from 'react';

type PrimaryButtonProps = {
  label: string,
  Icon?: ReactElement,
  className?: string
}

export default function PrimaryButton({ label, Icon, className }: PrimaryButtonProps) {
  return <PrimaryButtonStyled className={className}>
            <span>{ label }</span>
            <div className='icon'>{Icon && Icon}</div>
        </PrimaryButtonStyled>
}

const PrimaryButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 18px 24px;
    width: 100%;
    border-radius: ${theme.borderRadius.round};
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weight.heavy};
    font-family: "Open Sans", sans-serif;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
      transition: all 200ms ease-out;
    }

    &:active {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary_burger};
      border: 1px solid ${theme.colors.primary_burger};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }  
`;