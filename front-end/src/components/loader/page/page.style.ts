import styled from "styled-components";

export const LoaderContainer = styled.span`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
  }
  .loader::before,
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 6px solid #fcd535;
    animation: prixClipFix 2s linear infinite;
  }
  .loader::after {
    border-color: ${({ theme }) => theme.background.orange};
    animation:
      prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;
