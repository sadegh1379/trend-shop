import styled from "styled-components";

export const AppHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  .app_logo {
    width: 150px;
  }

  .header_icon {
    color: ${(props) => props.theme.text.orange};
  }

  .cart_badge_container {
    position: relative;

    .badge {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -10px;
      right: -10px;
      color: white;
      font-size: 10px;
      padding-top: 6px;
      background-color: ${(props) => props.theme.text.orange};
    }
  }
`;
