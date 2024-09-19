import styled from "styled-components";

export const HomePageContainer = styled.div`
  .banner_img {
    width: 100%;
    background-size: cover;
    border-radius: 10px;
    height: 140px;
    margin-top: 20px;
  }
  .product_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  .categories {
    display: flex;
    flex-direction: row;
    gap: 7px;
    padding-left: 10px;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    .category {
      border: 1px solid ${({ theme }) => theme.background.orange};
      color: ${({ theme }) => theme.background.orange};
      padding: 3px 8px;
      border-radius: 15px;
      white-space: nowrap;
      font-size: 14px;
      cursor: pointer;

      &.active {
        background-color: ${({ theme }) => theme.background.orange};
        color: #fff;
      }
    }
  }
`;
