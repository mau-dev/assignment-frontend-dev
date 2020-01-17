import React from "react";
import styled from "@emotion/styled";


const ItemContainer = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin: 0;
      padding: 0 0.25rem;

          .img-div {
            width: 33.33%;
            padding: 0 0.5rem 0 0;

                img {
                    max-width: 100%;
                    height: auto;
                    border: 2px solid #efefef;

                }

          }

          .text-div {
             width: 66.66%;
             padding: 0;


                p {
                    margin-bottom: 0;
                    font-size: 13px;


                    &:nth-of-type(3) {
                    text-align: right;
                   }
                }
           }

         hr {
            width: 100%;
            margin: 14px auto;

         }


 `





const CartItem = props => {
    const { data } = props;

    // use the keys in the DUMMY_DATA objects to render a nice CartItem here
    // return <div>Item</div>;
    return (
            <ItemContainer>
                <div className = "img-div">
                    <img src={data.thumbnail} alt="art-img" />
                </div>
                <div className = "text-div">
                    <p>{data.title}</p>
                    <p>{data.artist}</p>
                    <p> {data.price}</p>
                </div>
               <hr></hr>

             </ItemContainer>


    )


};

export default CartItem;