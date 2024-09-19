import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  .image_container {
    position: relative;
    .product_img {
      width: 100%;
      border-radius: 10px;
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
