import React, { useState } from "react";
import styled from "@emotion/styled";

import BadgeRound from "../badges/BadgeRound";
import CartItem from "./CartItem";
import IconCart from "../svg/IconCart";
import Popover from "../popups/Popover";

// normally this data would come from our API
// in this assignment, we will assume that these two items are in the cart
const DUMMY_DATA = [
  {
    id: 1,
    title: "Desire",
    artist: "Prakornpatara Janthakhaisorn",
    thumbnail:
      "https://ik.imagekit.io/theartling/p/artworks/PJanth_Desire04.jpg?tr=w-255,h-255,bg-FFFFFF",
    price: "S$ 1,352"
  },
  {
    id: 2,
    title: "Colours of Life 2",
    artist: "WH Thean",
    thumbnail:
      "https://ik.imagekit.io/theartling/p/products/Product/7a4f1965f92c411cba3c1b3c83398830.JPG?tr=w-255,h-255,bg-FFFFFF",
    price: "S$ 2,028"
  }
];

const CartIconContainer = styled.div(props => (
    {
      position: "relative"
    }
));

const H4 = styled.h4(
    {
      fontSize: '15px',
      fontWeight: '500',
      textAlign: 'center',
      marginTop: '0.5em'
    }
);

const SubtotalContainer = styled.div`
      display: flex;

        p {
            margin-bottom: 0;
            padding-bottom: 0.5em;
            font-size: 13px;

         &:first-child {
            padding-left: 5px;
           }

         &:nth-child(2) {
            position: absolute;
            right: 5;
        }
    }

 `



const Button = styled.button`

      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      background-color: #C8AF6A;
      color: white;
      text-transform: uppercase;
      font-size: 10pt;
      letter-spacing: 0.2em;
      padding: 1em;

           &:hover {
                opacity: 0.8;
                }

`

const amount = DUMMY_DATA.reduce((acc, itemPrice) => acc + parseInt((itemPrice.price).replace(/[^0-9]+/g, "")), 0);
const commaAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



const CartIcon = () => {
  // this is a React hook. If you don't know about hooks yet, don't worry about
  // this.
  const [isActive, setIsActive] = useState(false);

  return (
        <CartIconContainer>
            <div onClick={() => setIsActive(!isActive)}>
                <IconCart />
                <BadgeRound>{DUMMY_DATA.length}</BadgeRound>
            </div>

            <Popover isVisible={true} onClose={() => setIsActive(false)}>
            {/* Tip: .map() over the DUMMY_DATA here and mount <CartItem data={item} /> components*/}
            {/* <CartItem data={item} />*/}
                <div>
                    <H4>{DUMMY_DATA.length} items in your cart</H4>
                    <hr style={{borderColor: 'rgb(200, 175, 106)'}} ></hr>
                </div>
                {DUMMY_DATA.map( item => <CartItem data={item} /> )}
                <SubtotalContainer>
                    <p style={{paddingLeft: '5px'}}>Subtotal</p>
                    <p style={{position: 'absolute', right: '5px'}}>S$ { commaAmount}</p>
                </SubtotalContainer>
                    <Button as="a"
                            href="https://theartling.com/en/cart/"
                    >
                      go to cart
                    </Button>

            </Popover>
        </CartIconContainer>
  );
};

export default CartIcon;