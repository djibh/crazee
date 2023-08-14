import PropTypes from 'prop-types'
import { styled } from 'styled-components';

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
    border-radius: 5px;
    width: 100%;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
    font-size: 15px;
    font-weight: 800;
    font-family: "Open Sans", sans-serif;

    &:hover:not(:disabled) {
      background-color: white;
      color: #ff9f1b;
      border: 1px solid #ff9f1b;
      transition: all 200ms ease-out;
    }

    &:active {
      color: white;
      background-color: #ff9f1b;
      border: 1px solid #ff9f1b;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;

PrimaryButton.propTypes = {
    label: PropTypes.string,
    Icon: PropTypes.shape
}