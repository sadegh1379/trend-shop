import styled from "styled-components";

export const SidebarContainer = styled.aside`
  &.core_admin_sidebar {
    width: 280px;
    display: flex;
    height: 100%;
    flex-direction: column;
    position: sticky;
    top: 0;
    overflow: auto;
    height: calc(100vh);
    background-color: ${({ theme }) => theme.colors.background.infoLight};

    .link_item {
      padding: 12px 20px;
      position: relative;
      display: flex;
      align-items: center;
      gap: 12px;
      color: red;
      line-height: 19px;
      cursor: pointer;
      margin-right: 20px;
      font-size: 16px;
      font-weight: 300;
      line-height: 19px;
      color: #fff;

      &.logout {
        .link_item_icon {
          color: red;
        }
      }

      &.active {
        background-color: ${({ theme }) => theme.colors.background.primary};
        color: ${({ theme }) =>
          theme.mode === "light"
            ? theme.colors.text.infoLight
            : theme.colors.text.primary};
        border-radius: 0 35px 35px 0;

        &::before {
          content: "";
          position: absolute;
          background-color: transparent;
          bottom: -50px;
          left: 0;
          height: 50px;
          width: 25px;
          border-top-left-radius: 25px;
          box-shadow: 0 -25px 0 0 ${({ theme }) => theme.colors.background.primary};
        }

        &::after {
          content: "";
          position: absolute;
          background-color: transparent;
          top: -50px;
          left: 0;
          height: 50px;
          width: 25px;
          border-bottom-left-radius: 25px;
          box-shadow: 0 25px 0 0
            ${({ theme }) => theme.colors.background.primary};
        }
      }

      .link_item_title {
        padding-top: 5px;
      }
    }

    .sidebar_title_container {
      text-align: center;
      padding: 20px 0;
      padding-bottom: 30px;
      color: #fff;
      .sidebar_text {
      }
      .sidebar_title {
        font-size: 18px;
        font-weight: 700;
        line-height: 25.5px;
        margin-top: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    &.core_admin_sidebar {
      width: 80px;

      .link_item {
        gap: 0;
        margin-right: 0;

        &.active {
          &::before {
            display: none;
          }

          &::after {
            display: none;
          }
        }

        .link_item_title {
          display: none;
        }
      }

      .sidebar_title_container {
        display: none;
      }
    }
  }
`;
