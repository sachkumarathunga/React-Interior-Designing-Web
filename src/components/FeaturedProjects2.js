import React, { useState } from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./FeaturedProjects2.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    image:
      "https://images.prismic.io/idi2019/d9ac03ab-a700-4263-a3bc-719c380dd199_project_mcmcf_2.jpg?auto=compress,format&w=420&h=280&fit=crop&q=70&fm=pjpg",
    alt: "Marquette County Medical Care Facility",
    link: "/living/marquette-county-medical-care-facility",
  },
  {
    image:
      "https://images.prismic.io/idi2019/afbe8e60-f276-4124-b50e-d3266948846d_project_delft_1.jpg?auto=compress,format&w=420&h=280&fit=crop&q=70&fm=pjpg",
    alt: "The Delft Bistro",
    link: "/business/delft-bistro",
  },
  {
    image:
      "https://images.prismic.io/idi2019/f3c918b6-ac61-45bf-ac55-77ce4bc20796_nice_hero.jpg?auto=compress,format&w=420&h=280&fit=crop&q=70&fm=pjpg",
    alt: "NICE Community Schools",
    link: "/education/nice-community-schools",
  },
  {
    image:
      "https://images.prismic.io/idi2019/f3c918b6-ac61-45bf-ac55-77ce4bc20796_nice_hero.jpg?auto=compress,format&w=420&h=280&fit=crop&q=70&fm=pjpg",
    alt: "Project 4",
    link: "/education/project-4",
  },
  {
    image:
      "https://images.prismic.io/idi2019/f3c918b6-ac61-45bf-ac55-77ce4bc20796_nice_hero.jpg?auto=compress,format&w=420&h=280&fit=crop&q=70&fm=pjpg",
    alt: "Project 5",
    link: "/education/project-5",
  },
];

function FeaturedProjects2() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setSelectedImage(next),
  };

  return (
    <div className="featured-projects-2">
      <h2>Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`slide ${selectedImage === index ? "selected" : ""}`}
            onClick={() => handleImageClick(index)}
          >
            <a href={project.link}>
              <img src={project.image} alt={project.alt} />
            </a>
            <div className="overlay">
              <div className="circle">DRAG</div>
            </div>
            {selectedImage === index && (
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FeaturedProjects2;
