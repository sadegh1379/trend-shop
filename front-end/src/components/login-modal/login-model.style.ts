import styled from "styled-components";

export const LoginModalContainer = styled.div`
  .login_modal {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: #00000090;
    display: grid;

    .login_modal_container {
      place-self: center;
      width: 310px;
      color: #808080;
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 25px 30px;
      border-radius: 8px;
      font-size: 14px;
      animation: fadeIn 0.5s;

      .login_modal_title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;
      }

      .login_modal_inputs {
        display: flex;
        flex-direction: column;
        gap: 20px;

        input {
          outline: none;
          border: 1px solid #c9c9c9;
          padding: 10px;
          border-radius: 4px;
        }
      }

      button {
        border: none;
        padding: 10px;
        border-radius: 4px;
        color: white;
        background-color: ${(props) => props.theme.text.orange};
        font-size: 15px;
        cursor: pointer;
      }

      .login_modal_condition {
        display: flex;
        align-items: start;
        gap: 8px;
        margin-top: -15px;

        input {
          margin-top: 3px;
        }
      }
    }

    p {
      span {
        color: ${(props) => props.theme.text.orange};
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
