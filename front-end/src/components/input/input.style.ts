import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  min-width: 60px;
  .title {
    color: ${({ theme }) => theme.text.black};
    margin-bottom: 10px;
    font-size: 14px;
  }
  .input_container {
    position: relative;

    .input {
      width: 100%;
      min-width: 60px;
      background-color: ${({ theme }) => theme.background.white};
      color: ${({ theme }) => theme.text.black};
      border-radius: 9px;
      border: 1px solid ${({ theme }) => theme.text.orange};
      font-size: 17px;
      padding: 10px 11px 9px 11px;
      text-align: right;

      &:focus {
        outline: none;
      }

      &::placeholder {
        color: ${({ theme }) => theme.text.black};
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
      }
      &:disabled {
        background-color: ${({ theme }) => theme.background.greyLight};
      }
    }

    .left_icon {
      position: absolute;
      border-right: 1px solid ${({ theme }) => theme.background.black};
      color: ${({ theme }) => theme.background.orange};
      bottom: 11px;
      left: 13px;
      padding-right: 8px;
    }
  }

  .required {
    color: red;
  }
`;
