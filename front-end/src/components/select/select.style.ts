import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-width: 60px;

  .select {
    border-radius: 9px !important;
    width: 100%;
    min-width: 60px;
  }

  .title {
    color: ${(props) => props.theme.text.black};
    margin-bottom: 10px;
    font-size: 14px;
  }

  .required {
    color: red;
  }

  @keyframes MenuFadeIn {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(5px);
    }
  }
`;
