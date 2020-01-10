import styled from "@emotion/styled";

const FlexRowCentered = styled.div(
  props => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  }),
  props =>
    props.justifyContent && {
      justifyContent: props.justifyContent
    }
);

export default FlexRowCentered;
