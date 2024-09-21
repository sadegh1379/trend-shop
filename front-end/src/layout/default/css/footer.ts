import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.background.greyDark};

  text-align: center;
  padding: 0 0;

  .title {
    font-weight: 500;
    font-size: 10px;
    margin-top: 5px;
  }
`;
