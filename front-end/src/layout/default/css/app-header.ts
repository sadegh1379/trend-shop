import styled from "styled-components";

export const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  .app_logo {
    width: 150px;
  }

  .header_icon {
    color: ${(props) => props.theme.text.orange};
  }
`;
