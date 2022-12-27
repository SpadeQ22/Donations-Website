import "./slider.css";
import Table from "./table";
import * as campaignController from "../../../middleware/campaign.service"
import { useEffect, useState } from "react";

function Slider() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(()=>{
      campaignController.getAllCampaigns().then((res)=>{
        console.log(res);
        setCampaigns(res.data);
      });
  }, [])


  return (
    <div class="slider">
      <div id="c1">
        <div id="news_title">News</div> <br />
        <br />
        <br />{" "}
        <p>
          {" "}
          Multiple interlocking crises have characterized this year, including
          global hunger, distupted education and the climate crisis.
          <br />
          <br /> In Somalia, a mother holds her baby who is being treated for
          malnutrition. <br />
          <br />{" "}
        </p>
      </div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          {campaigns.map((Campaign, index)=>{
            return(<div class= {(index+1) === 1?  "carousel-item active": "carousel-item"}>
              <Table title={Campaign.campaignTitle} description={Campaign.campaignDescription} number={index+1}/>
            </div>);
          })}
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;
