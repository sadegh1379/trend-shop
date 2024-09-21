import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  .image_container {
    position: relative;
    .product_img {
      width: 100%;
      border-radius: 10px;
      cursor: pointer; /* Allow clicking on the image to open full screen */
    }

    .full_screen {
      position: absolute;
      bottom: 15px;
      right: 15px;
      color: ${(props) => props.theme.text.orange};
      cursor: pointer;
    }
  }

  .product_info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;

    .title {
      font-size: 16px;
    }

    .detail_tools {
      background-color: #fefefe;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      border: 2px solid ${(props) => props.theme.text.orange};
      border-radius: 25px;
      padding: 2px 5px;
      p {
        font-size: 18px;
        padding-top: 4px;
      }

      .detail_tools_add {
        color: green;
        cursor: pointer;
      }

      .detail_tools_remove {
        color: red;
        cursor: pointer;
      }
    }
  }
  .description {
    font-size: 14px;
    color: ${(props) => props.theme.text.greyDark};
  }

  .price {
    color: ${(props) => props.theme.text.orange};
    font-size: 20px;
  }
`;

export const FullScreenImageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .full_screen_img {
    max-width: 90vw;
    max-height: 90vh;
    cursor: pointer; /* Allow clicking on the image to close full screen */
  }

  .resize_icon {
    position: absolute;
    top: 20px;
    right: 20px;
    color: white;
    cursor: pointer;
  }
`;
