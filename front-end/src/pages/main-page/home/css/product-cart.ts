import styled from "styled-components";

export const ProductCartContainer = styled.div`
  position: relative;
  background-color: #fefefe;
  border-radius: 4px;
  padding: 7px;
  box-shadow: ${(props) => props.theme.shadow.sm};
  cursor: pointer;
  .product_img {
    border-radius: 10px;
    width: 100%;
  }

  .product_favorite_icon {
    position: absolute;
    top: 10px;
    left: 10px;
    color: ${({ theme }) => theme.text.orange};
  }

  .product_title {
    margin-top: 7px;
    color: ${({ theme }) => theme.text.black};
    font-size: 14px;
    font-weight: 600;
  }

  .product_description {
    margin-top: 7px;
    color: ${({ theme }) => theme.text.greyDark};
    font-size: 12px;
  }

  .product_price {
    margin-top: 5px;
    color: ${({ theme }) => theme.text.orange};
    font-size: 14px;
    font-weight: 700;
  }
`;
