import { FC } from "react";
import { default as BModal } from "react-bootstrap/Modal";
import { IoIosClose } from "react-icons/io";
import { useTheme } from "styled-components";
import { IModalProps } from "./types";

export const Modal: FC<IModalProps> = ({
  onClose,
  isOpen,
  title,
  size = "lg",
  children,
  className,
}) => {
  const { background } = useTheme();
  return (
    <BModal
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={isOpen}
      onHide={onClose}
      className={className}
    >
      {title && (
        <BModal.Header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: background.orange,
            position: "relative",
          }}
        >
          <IoIosClose
            size={35}
            style={{
              margin: 0,
              color: "#ffffff",
              cursor: "pointer",
              position: "absolute",
              right: 10,
              top: 8,
            }}
            onClick={onClose}
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            {title}
          </p>
        </BModal.Header>
      )}
      <BModal.Body>{children}</BModal.Body>
    </BModal>
  );
};
