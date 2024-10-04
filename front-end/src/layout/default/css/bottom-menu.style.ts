import styled from "styled-components";

export const BottomMenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: ${(props) => props.theme.text.orange};
  border-top: 1px solid ${(props) => props.theme.text.greyLight};
  max-width: 430px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  align-items: center;

  .link_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: 12px;
    gap: 3px;
    color: #ffccbc;

    &.active {
      color: #fff;
    }

    &.home_item {
      width: 60px;
      height: 60px;
      background-color: ${(props) => props.theme.background.orange};
      color: #fff;
      border-radius: 50%;
      margin-bottom: 40px;
      border: 3px solid #fff;
    }
  }
`;
