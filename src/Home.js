import Card from "./Card";
import React from "react";
import Banner from "./Banner";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_section">
        <Card
          src="https://www.russells.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/1/0/10126929_LINCOLN_MK2_2PCE_BRS_56e4.jpg"
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
        />
        <Card
          src="https://www.rochester.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/K/n/Knight_3pce_Bedroom_Suite_1_8911.jpg"
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
        />
        <Card
          src="https://www.russells.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/1/0/10118535_KENTON_BRS_a423.jpg"
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://www.rochester.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/m/i/missouri_bed_lifestyle_4ef3.jpg"
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
          price="R1200/night"
        />
        <Card
          src="https://media-cdn.tripadvisor.com/media/photo-s/16/45/16/dd/the-mood-luxury-rooms.jpg"
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
          price="R1200/night"
        />
        <Card
          src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/206744855.jpg?k=8bd8700a7a922106ca04e5545d125f1f59f9d3158d372e2def0950e2a69f37dd&o="
          title="Unique Stays"
          description="Spaces that are more than just comfortable"
          price="R1200/night"
        />
      </div>
    </div>
  );
}

export default Home;
