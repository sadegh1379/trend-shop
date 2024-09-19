import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    max-width: 430px;
    margin: 0 auto;
    background-color: #efefef;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: "digi-kala";
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text.orange};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "digiKala";
    background-color: ${(props) => props.theme.background.white};
    color: ${(props) => props.theme.text.black};
    direction: rtl;
  }

  input[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      /* display: none; <- Crashes Chrome on hover */
      -webkit-appearance: none;
      margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
      -moz-appearance: textfield;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  /* react toastify  css */
  .app_toast_container {
    .Toastify__toast-body {
      font-family: "digiKala";
      z-index: 9999999999;
      font-size: 14px;
      font-weight: 500;
    }
  }

  @-moz-document url-prefix() {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${({ theme }) => theme.background.orange} #D9E3EF;
    }
  }

  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #d9e3ef;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.background.orange};
    border-radius: 50px;
  }

  .pointer{
    cursor: pointer;
  }

 

  /* css animations */
  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes shake-rotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes shake-x {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(5px);
    }
    75% {
      transform: translateX(-5px);
    }
    100% {
      transform: translateX(0);
    }
  }

 
`;
