import React from "react";
import styled from "@emotion/styled";

const PopoverContainer = styled.div(props => ({
  // You need to add some styles here to move the popover to the top of
  // whatever container <Popover> is mounted in.
  //
  // tip: you can assume that the parent component of this component uses
  // `position: relative` (and you can see that `CartIconContainer` in
  // `CartIcon.jsx` indeed uses `position: relative`)
}));

const ContentContainer = styled.div(props => ({
  position: "relative",
  border: "1px solid black",
  zIndex: 2
}));

// This is an invisible overlay that takes up the entire screen. This helps
// us to close the popover then whe user clicks anywhere outside the popover
// content
const FullPageOverlay = styled.div(props => ({
  position: "fixed",
  backgroundColor: "#DFDFDF",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  opacity: 0,
  zIndex: 1
}));

const Popover = props => {
  const { children, isVisible, onClose } = props;

  if (!isVisible) {
    return null;
  }

  return (
    <PopoverContainer>
      <FullPageOverlay onClick={() => onClose()} />
      <ContentContainer>{children}</ContentContainer>
    </PopoverContainer>
  );
};

export default Popover;
