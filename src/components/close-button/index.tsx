import React from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  position: absolute;
  right: 5px;
  top: 20px;
  color: ${({ theme }) => theme.colors.dargGrey};
  svg {
    font-weight: 600;
    font-size: 1.3em;
  }
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.dargGrey};
  }
`;

const CloseButton: React.FC<{
  close: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ close }) => {
  return (
    <CloseBtn onClick={close.bind(null, false)}>
      <CgClose />
      Close
    </CloseBtn>
  );
};

export default CloseButton;
