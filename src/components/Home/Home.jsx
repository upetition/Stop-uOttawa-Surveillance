import React from "react";
import PetitionForm from "../PetitionForm";

const Home = () => {
  return <main id="mainContent">
    <div className="container">
      <div className="row justify-content-center mt-5 p-0">
        <h3>Home</h3>
      </div>
      <div className="row justify-content-center">
        <PetitionForm />
      </div>
    </div>
  </main>;
}
export default Home;
