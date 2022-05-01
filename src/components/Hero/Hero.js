import React from "react"
import Image from "../Images/Images"

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <Image
            className="d-block mx-lg-auto img-fluid shadow"
            style={{ borderRadius: "10px" }}
            filename="Heroo.jpg"
            alt="hero"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="fat-text lh-1 mb-3">
            Hey folks,
            Welcome to STUDYHALL
            Hope you are doing well and 
          </h1>
          <p className="lead">
          “STUDYHALL” is a platform which designed in way that anyone can get movies, documentaries and series related to their subjects and topics. This site also explain “ABOUT” section, about the movie that what’s this movies wants to show and how it is related to your subjects.
      People from the stream like Science (Engineering, Medical, Zoology etc.), History, Political Science and Languages (only Hindi & English) can check out this to find some of good movies /series/documentaries along with books related to their topic

          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary shadow px-4 me-md-2"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
