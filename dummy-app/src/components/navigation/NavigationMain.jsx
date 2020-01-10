import React from "react";
import { Container, Row, Col } from "react-grid-system";
import styled from "@emotion/styled";

import CartIcon from "../cart/CartIcon";
import FlexRowCentered from "../flex/FlexRowCentered";
import LogoArtling from "../svg/LogoArtling";

const Header = styled.header(props => ({
  padding: "1em 0px",
  borderBottom: `1px solid ${props.theme.colors.gray}`
}));

const NavigationMain = () => {
  return (
    <Header>
      <Container>
        <Row>
          <Col sm={3}>
            <LogoArtling />
          </Col>
          <Col>
            <FlexRowCentered justifyContent="space-around">
              <div>Art</div>
              <div>Design</div>
              <div>Prints</div>
              <div>Books</div>
              <div>Discover</div>
            </FlexRowCentered>
          </Col>
          <Col sm={3}>
            <FlexRowCentered justifyContent="flex-end">
              <CartIcon />
            </FlexRowCentered>
          </Col>
        </Row>
      </Container>
    </Header>
  );
};

export default NavigationMain;
