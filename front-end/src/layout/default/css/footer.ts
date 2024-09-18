import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.orange};
  text-align: center;
  padding: 9px 0;

  .title {
    font-weight: 500;
    font-size: 10px;
    margin-top: 5px;
    color: ${({ theme }) => theme.text.white};
  }
`;
