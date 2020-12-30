import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import "./scss/others.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ItemsSlider(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <div className="auction_card">
      <div className="image-container">
        <div
          style={{ padding: `0 ${chevronWidth}px` }}
          className="image-container"
        >
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            gutter={20}
            leftChevron={
              <button className="lft-btn">{<IoIosArrowBack />}</button>
            }
            rightChevron={
              <button className="rgt-btn">{<IoIosArrowForward />}</button>
            }
            outsideChevron
            chevronWidth={chevronWidth}
          >
            <img src={props.img} />
            <img src={props.img} />
            <img src={props.img} />
          </ItemsCarousel>
        </div>
      </div>
      <div className="details">
        <p className="itemName">{props.name}</p>
        <div className="bids">
          <p>
            Current bid: <span className="c_bid">$ {props.C_bid}</span>
          </p>
          <p>
            Bid Increment: <span className="b_incr">$ {props.B_incr}</span>
          </p>
        </div>
        <hr />
        <div className="Location">
          <p>Location: {props.location}</p>
          <p>Date: {props.date}</p>
        </div>
      </div>
      <Link to="/view-auction">
        <div className="item-btn">View Items</div>
      </Link>
    </div>
  );
}
