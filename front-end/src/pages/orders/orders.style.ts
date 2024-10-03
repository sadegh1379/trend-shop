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
      grid-template-columns: 1fr 1.3fr 1fr 1fr 1fr;
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
  }
`;
