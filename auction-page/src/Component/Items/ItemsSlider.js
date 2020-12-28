import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import Itemcard from "./ItemCard";
import "./scss/Items.css";

//images
import Img1 from './ItemImg/add.jpg'
import Img2 from './ItemImg/bead.jpg'
import Img3 from './ItemImg/bead1.jpg'
import Img4 from './ItemImg/bead2.jpg'
import Img5 from './ItemImg/scukp2.jpg'
import Img6 from './ItemImg/sculp.jpg'
import Img7 from './ItemImg/sculp1.jpg'
import Img8 from './ItemImg/sculp3.jpg'
import Img9 from './ItemImg/sculp4.jpg'



export default function ItemsSlider() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }} className="auction-slider">
      <p className="auction-header">Trending Auction</p>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <Itemcard img={Img1} name='Manmade sculpture' C_bid='10000' B_incr='1000' location='Ife, NG'/>
        <Itemcard img={Img2} name='expersive beads' C_bid='100' B_incr='100' location='Lagos, NG'/>
        <Itemcard img={Img3} name='mosaic bracelet' C_bid='90000' B_incr='300' location='Accra, GH'/>
        <Itemcard img={Img4} name='mosaic bracelet' C_bid='5000' B_incr='1000' location='Benin, NG'/>
        <Itemcard img={Img5} name='Sculpture' C_bid='7800' B_incr='100' location='Accra, GH'/>
        <Itemcard img={Img6} name='Sculpture' C_bid='10000' B_incr='1000' location='Accra, GH'/>
        <Itemcard img={Img7} name='Sculpture of the Gods' C_bid='10000' B_incr='500' location='Accra, GH'/>
        <Itemcard img={Img8} name='Sculpture' C_bid='10000' B_incr='200' location='Accra, GH'/>
        <Itemcard img={Img9} name='Sculpture' C_bid='10000' B_incr='1000' location='Lagos, NG'/>



      </ItemsCarousel>
    </div>
  );
}
