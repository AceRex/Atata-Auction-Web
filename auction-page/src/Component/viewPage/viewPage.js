import "./scss/viewPage.css";
import Header from "../Header/header";
import ItemsCarousel from "react-items-carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Img from "../Items/ItemImg/add.jpg";
import NumberFormat from "react-number-format";
import Category from '../category/category'
import Footer from '../footer/footer'


export default function ViewPage(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
  return (
    <div className="container">
      <Header />
      <div className="container">
        <div className="auction-header">
          <h1>MANMADE SCULPTURE</h1>
          <div className="auction-header-details">
            <p>ID: ATT1122434 </p> ||
            <span>Time out: </span>
          </div>
        </div>
        <div className="auction-details">
          <div className="auction-current-items">
            <div className="auction-images">
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
                  <img src={Img} />
                  <img src={Img} />
                  <img src={Img} />
                </ItemsCarousel>
              </div>
            </div>
            <div className="auction-item-details">
              <div className="header">Item Information</div>
              <div className="info">
                <table>
                  <tr>
                    <td>Weight (kg):</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Width (cm):</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Lenght (cm):</td>
                    <td>50</td>
                  </tr>{" "}
                  <tr>
                    <td>Breadth (cm):</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Sale Location:</td>
                    <td>Lagos, Nigeria.</td>
                  </tr>
                  <tr>
                    <td>Bid status:</td>
                    <td>Live</td>
                  </tr>
                  <tr>
                    <td>details:</td>
                    <td>####</td>
                  </tr>
                  <tr>
                    <td>details:</td>
                    <td>####</td>
                  </tr>
                  <tr>
                    <td>details:</td>
                    <td>####</td>
                  </tr>
                  <tr>
                    <td>details:</td>
                    <td>####</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="auction-market">
            <div className="header">Auction Market</div>
            <div className="bidings">
              <div className="live-bids">
                <p>Current Bid is at</p>
                <h2>
                  <NumberFormat
                    className={"px-1"}
                    value={"0"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </h2>
              </div>
              <div className="place-bids">
              <table>
                  <tr>
                    <td>Sales Status:</td>
                    <td>Open</td>
                  </tr>
                  <tr>
                    <td>Bid Increment:</td>
                    <td>
                    <NumberFormat
                    className={"px-1"}
                    value={"0"}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                    </td>
                  </tr>
                  <tr>
                    <td>Sales Date:</td>
                    <td>(YYYY/MM/DD)</td>
                  </tr>
                  <tr>
                    <td>Your Bid (USD):</td>
                    <td><input type='text'/></td>
                  </tr>
                  </table>
                  <button type='submit'>Place Bid</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Category />
      <Footer />
    </div>
  );
}
