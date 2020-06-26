import React from "react";
import PetitionForm from "../PetitionForm";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import styles from "./home.module.css";
import { Card } from "@material-ui/core";

const Home = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row align-items-center pb-5">
        <div className="col-lg-8 col-md-12">
          <div className="row justify-content-center mt-5 p-0">
            <h3>Stop uOttawa&apos;s surveillance plans</h3>
          </div>
          <div className="row justify-content-center mt-2 p-0">
          <p className={styles.contentSize}>The University of Ottawa is planning to force students to use Respondus Lockdown browser and monitoring. This is a gross invasion of student privacy and insults the integrity of every student. <br /><br />Help us put a stop to this. Sign the <a href="/petition">petition</a> now</p>
          </div>
          <div className="row justify-content-center align-content-center pb-5">
              <PetitionForm />
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <Card>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="uPetitionCa"
            options={{height: 400}}
          />
          </Card>
        </div>
      </div>
    </div>
  </main>;
}
export default Home;
