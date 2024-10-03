import styled from "styled-components";

export const OrderContainer = styled.div`
  .place_order {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .place_order_left,
    .place_order_right {
      width: 100%;
    }

    .title {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    input,
    textarea {
      margin-bottom: 15px;
      width: 100%;
      padding: 10px;
      border: 1px solid #c5c5c5;
      border-radius: 4px;
    }

    .multi_fields {
      display: flex;
      gap: 10px;
    }

    .cart_total {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
      h2 {
        font-size: 22px;
        margin-bottom: 20px;
      }
    }

    .cart_total_details {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      p {
        font-size: 16px;
        margin: 0;
      }
      b {
        font-size: 18px;
      }
    }

    input[type="file"] {
      border: none;
      background-color: transparent;
      margin-bottom: 10px;
      width: 100%;
      padding: 10px;
      border: 1px solid #c5c5c5;
      border-radius: 4px;
    }

    .image-preview {
      margin: 10px 0;
      width: 100%;
      max-width: 200px;
      height: auto;
      border: 1px solid #eaeaea;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  .place_order_right {
    width: 100%;
    .cart_total {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

      h2 {
        font-size: 22px;
        margin-bottom: 20px;
      }

      .cart_total_details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        p {
          font-size: 16px;
          margin: 0;
        }

        b {
          font-size: 18px;
        }
      }

      hr {
        margin: 10px 0;
      }
    }
  }
`;
