import styled from "styled-components";

export const ButtonContainer = styled.button`
  min-width: 60px;
  width: max-content;
  color: ${(props) => props.theme.background.orange};
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.background.orange};
  transition: all 0.2s linear;
  padding: 5px 10px;

  &.primary {
    border: 2px solid ${(props) => props.theme.background.orange};
    color: ${(props) => props.theme.background.orange};
  }

  &.outlined {
    background-color: ${(props) => props.theme.background.orange};
    color: ${(props) => props.theme.background.white};
  }
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
