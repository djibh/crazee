import PropTypes from 'prop-types'
import { styled } from 'styled-components';
import { theme } from '../../theme';

export default function PrimaryButton({ label, Icon }) {
  return <PrimaryButtonStyled>
            <span>{ label }</span>
            {Icon && Icon}
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
    font-size: ${theme.fonts.size.P0};
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
`;

PrimaryButton.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.element
}