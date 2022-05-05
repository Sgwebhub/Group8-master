import { Link } from "gatsby"
import React from "react"
import { StarFill } from "react-bootstrap-icons"
import Image from "../Images/Images"

const Item = [
  {
    name: "Apollo 13",
    year: "1995",
    path: "/Apollo 13/",
    image: "Apollo 13",
    rating: "7.7",
  },
  {
    name: "Alexander",
    year: "1995",
    path: "/Alexander/",
    image: "Alexander",
    rating: "7.7",
  },
  {
    name: "Batman",
    year: "2022",
    path: "/Batman/",
    image: "Batman",
    rating: "8.1",
  },
   {
    name: "A Plastic Ocean",
    year: "2016",
    path: "/A Plastic Ocean/",
    image: "A Plastic Ocean",
    rating: "8.1",
  },
  {
    name: "Avatar",
    year: "2022",
    path: "/Avatar/",
    image: "Avatar",
    rating: "8.1",
  },
  {
    name: "Confucius",
    year: "2010",
    path: "/Confucius/",
    image: "Confucius",
    rating: "6.1",
  },
  {
    name: "The Good Doctor",
    year: "2022",
    path: "/The Good Doctor/",
    image: "The Good Doctor",
    rating: "7",
  },  
]

const SlideCard = () => {
  return (
    <div className="accordion">
      <div className="ul">
        {Item.map((item, i) => {
          return (
            <li key={i}>
              <Link to={`/movie${item.path}`}>
                <div className="figure">
                  <Image
                    filename={`${item.image}.jpg`}
                    style={{
                      height: "320px",
                      width: "100%",
                      margin: "0 auto",
                    }}
                    alt={item.name}
                  />

                  <div className="figcaption">
                    <h4 className="fw-bold text-light">
                      {item.name} ({item.year})
                    </h4>
                    <h4 className="fw-bold text-warning">
                      <StarFill style={{ marginTop: "-7px" }} /> {item.rating}
                      /10
                    </h4>
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </div>
    </div>
  )
}

export default SlideCard
