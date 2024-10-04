import styled from "styled-components";

export const AdminContainer = styled.div`
  .login_modal {
    text-align: center;
    .login_modal_container {
      place-self: center;
      width: 310px;
      background-color: white;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 25px 30px;
      border-radius: 8px;
      font-size: 14px;
      animation: fadeIn 0.5s;
      margin: 50px auto;

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
