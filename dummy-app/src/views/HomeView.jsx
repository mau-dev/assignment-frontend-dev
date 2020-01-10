import React from "react";
import { Container } from "react-grid-system";

const HomeView = () => {
  return (
    <main style={{ marginTop: "1em" }}>
      <Container>
        <img
          alt="Banner"
          src="https://ik.imagekit.io/theartling/p/banners/Banner/b5244ee546f94adfa166d874a0cd4124.jpg?tr=w-1110"
          style={{ width: "100%" }}
        />
      </Container>
    </main>
  );
};

export default HomeView;
