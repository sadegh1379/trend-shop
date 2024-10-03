import styled from "styled-components";

export const CartContainer = styled.div`
  .cart {
    margin-top: 30px;

    hr {
      height: 1px;
      background-color: #e2e2e2;
      border: none;
    }

    .cart_items_title {
      display: grid;
      grid-template-columns: 1fr 1.3fr 1fr 0.5fr 1fr 0.5fr;
      align-items: center;
      text-align: center;

      color: grey;
      font-size: 12px;
    }

    .cart_items_item {
      margin: 5px 0;
      color: black;

      img {
        width: 50px;
      }
    }

    .cart_bottom {
      margin-top: 30px;
      display: flex;
      flex-direction: column-reverse;
      justify-content: space-between;
      gap: max(12vw, 20px);

      .cart_total {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;

        hr {
          margin: 10px 0;
        }

        button {
          border: none;
          color: white;
          background-color: var(--bg-pink-500);
          width: max(15vw, 20px);
          padding: 12px 0;
          border-radius: 4px;
          cursor: pointer;
        }
      }

      .cart_total_details {
        display: flex;
        justify-content: space-between;
        color: #555;
      }

      .cart_promocode {
        flex: 1;
        justify-content: start;

        p {
          color: #555;
        }

        .promocode_input {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #eaeaea;
          border-radius: 4px;

          input {
            background-color: transparent;
            border: none;
            outline: none;
            padding-right: 10px;
          }

          button {
            width: max(10vw, 150px);
            padding: 12px 5px;
            background-color: black;
            border: none;
            color: white;
            border-radius: 4px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
