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
                        Swagat hai apka! 
          </h1>
          <p className="lead">
          We beleive you are also a moviephile who is passienately instrested in films and films theory. Then you have come to the right place.

                 Yes,        STUDY_HALL is here to show you movies and related books to your subject......

          Whatch, learn and enjoy! 

          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary shadow px-4 me-md-2"
            >
              Movies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
