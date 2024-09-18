import styled from "styled-components";

export const RingLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  .ring_loader {
    width: 52px;
    height: 52px;
    border: 8px solid ${(props) => props.theme.background.white};
    border-bottom-color: ${(props) => props.theme.background.orange};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
