import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 60px;
  width: 60px;
  background-color: #104c82;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #104c82;
  transition: all 0.2s linear;

  .dot {
    background-color: ${(props) => props.theme.background.orange};
  }

  &:hover {
    cursor: pointer;
  }

  &.disabled {
    opacity: 0.9;
    cursor: not-allowed;
  }
`;
