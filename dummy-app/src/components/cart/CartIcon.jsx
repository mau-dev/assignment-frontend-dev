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

const CartIconContainer = styled.div(props => ({
  position: "relative"


}));



const CartIcon = () => {
  // this is a React hook. If you don't know about hooks yet, don't worry about
  // this.
  const [isActive, setIsActive] = useState(false);

  return (
    <CartIconContainer>
      <div onClick={() => setIsActive(!isActive)}>
        <IconCart />
        <BadgeRound>2</BadgeRound>
      </div>

      <Popover isVisible={true} onClose={() => setIsActive(false)}>
       {/*Tip: .map() over the DUMMY_DATA here and mount <CartItem data={item} /> components*/}
       <div >
            <div>
                <h4 style = {{fontSize: '15px', fontWeight: '500', textAlign: 'center', marginTop: '0.5em'}}>{DUMMY_DATA.length} items in your cart</h4>
                <hr style={{borderColor: 'rgb(200, 175, 106)'}} ></hr>
            </div>
            <div>
                {DUMMY_DATA.map((item) =>(

                    <div className="row m-0 py-0 px-1 col-12" style={{fontSize: '13px'}}>
                        <div className="col-4 p-0 pr-2">
                            <img src={item.thumbnail} style={{maxWidth: '100%', height: 'auto', border: '2px solid #efefef'}} />
                        </div>
                        <div className = "col-8 p-0">
                            <p className = "mb-0">{item.title}</p>
                            <p className = "mb-0">{item.artist}</p>
                            <p className = "text-right mb-0"> {item.price}</p>
                        </div>
                        <hr style={{width: '100%', margin: '14px auto'}} ></hr>

                    </div>


                ))}
                </div>
        </div>


      </Popover>
    </CartIconContainer>
  );
};

export default CartIcon;