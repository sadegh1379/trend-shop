import styled from "styled-components";

export const TextareaContainer = styled.div`
  .title {
    color: ${({ theme }) => theme.text.black};
    margin-bottom: 8px;
    font-size: 14px;
  }

  .textarea {
    min-width: 60px;

    width: 100%;
    background-color: ${({ theme }) => theme.background.black};
    color: ${({ theme }) => theme.text.black};
    border-radius: 9px;
    border: 1px solid ${({ theme }) => theme.border.black};
    font-size: 17px;
    padding: 5px 8px;

    &:disabled {
      background-color: ${({ theme }) => theme.background.greyLight};
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #828282;
    }
  }
  .required {
    color: red;
  }
`;
