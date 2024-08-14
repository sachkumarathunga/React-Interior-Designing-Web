import React from "react";
import "./BusinessAndEducation.css";
import businessImage from "../images/business.avif"; // Replace with your image path
import educationImage from "../images/higher-education.avif"; // Replace with your image path
import livingImage from "../images/living.avif"; // Replace with your image path
import municipalImage from "../images/municipal.avif"; // Replace with your image path

const BusinessAndEducation = () => {
  return (
    <div className="Container-sc-1uyjznq-0 eBZEyY Grid-sc-1gc00t8-0 HomeIndustries__IndustriesGrid-sc-12x8pk9-5 eavKAV">
      <div className="Grid__Item-sc-1gc00t8-1 HomeIndustries__IndustryItem-sc-12x8pk9-6 hzBbuM">
        <div className="AngledImg__StyledAngledImg-sc-l04nmq-0 eedwbc HomeIndustries__IndustryImg-sc-12x8pk9-7 iexjdx">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 fZxNrn">
            <img
              alt="Business"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
              src={businessImage}
            />
          </div>
        </div>
        <div className="HomeIndustries__IndustryContent-sc-12x8pk9-8 jKMlSJ">
          <h4 className="H__H4-sc-be5gk5-2 StwfE">Business</h4>
          <p className="HomeIndustries__IndustryCopy-sc-12x8pk9-9 fywiye">
            Whether you need an office, a storefront or an airy workspace, we'll
            create a functional design that works for you and your team. From
            spaces that allow for easy movement to designs that make customers
            feel more at home, our team puts innovation and creativity at the
            forefront of every project.
          </p>
          <a
            aria-label="Business"
            className="StyledLink-sc-zurfbq-0 vQgHw"
            href="/business"
          >
            learn more
          </a>
        </div>
      </div>
      <div className="Grid__Item-sc-1gc00t8-1 HomeIndustries__IndustryItem-sc-12x8pk9-6 hzBbuM">
        <div className="AngledImg__StyledAngledImg-sc-l04nmq-0 eedwbc HomeIndustries__IndustryImg-sc-12x8pk9-7 iexjdx">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 fZxNrn">
            <img
              alt="Higher Education"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
              src={educationImage}
            />
          </div>
        </div>
        <div className="HomeIndustries__IndustryContent-sc-12x8pk9-8 jKMlSJ">
          <h4 className="H__H4-sc-be5gk5-2 StwfE">Higher Education</h4>
          <p className="HomeIndustries__IndustryCopy-sc-12x8pk9-9 fywiye">
            We strive to elevate the campus experience. With designs that
            inspire learning and collaboration, our academic environments help
            shape the minds of future generations.
          </p>
          <a
            aria-label="Higher Education"
            className="StyledLink-sc-zurfbq-0 vQgHw"
            href="/higher-education"
          >
            learn more
          </a>
        </div>
      </div>
      <div className="Grid__Item-sc-1gc00t8-1 HomeIndustries__IndustryItem-sc-12x8pk9-6 hzBbuM">
        <div className="AngledImg__StyledAngledImg-sc-l04nmq-0 eedwbc HomeIndustries__IndustryImg-sc-12x8pk9-7 iexjdx">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 fZxNrn">
            <img
              alt="Living"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
              src={livingImage}
            />
          </div>
        </div>
        <div className="HomeIndustries__IndustryContent-sc-12x8pk9-8 jKMlSJ">
          <h4 className="H__H4-sc-be5gk5-2 StwfE">Living</h4>
          <p className="HomeIndustries__IndustryCopy-sc-12x8pk9-9 fywiye">
            Safety and comfort are at the forefront of our living environments.
            With designs that enhance your community and provide ample space for
            studying, play time or visiting a loved one, our housing and senior
            living spaces make residents of all ages feel at home.
          </p>
          <a
            aria-label="Living"
            className="StyledLink-sc-zurfbq-0 vQgHw"
            href="/living"
          >
            learn more
          </a>
        </div>
      </div>
      <div className="Grid__Item-sc-1gc00t8-1 HomeIndustries__IndustryItem-sc-12x8pk9-6 hzBbuM">
        <div className="AngledImg__StyledAngledImg-sc-l04nmq-0 eedwbc HomeIndustries__IndustryImg-sc-12x8pk9-7 iexjdx">
          <div className="RatioImg__Wrapper-sc-8qesjk-1 fZxNrn">
            <img
              alt="Municipal/Industrial"
              className="RatioImg__Img-sc-8qesjk-0 dwEpAz"
              src={municipalImage}
            />
          </div>
        </div>
        <div className="HomeIndustries__IndustryContent-sc-12x8pk9-8 jKMlSJ">
          <h4 className="H__H4-sc-be5gk5-2 StwfE">Municipal/Industrial</h4>
          <p className="HomeIndustries__IndustryCopy-sc-12x8pk9-9 fywiye">
            When it comes to productivity, a well-designed space is key. Our
            approach is simple - we'll work with you to design a space that will
            optimize operations and help you succeed safely, efficiently and
            effectively.
          </p>
          <a
            aria-label="Municipal/Industrial"
            className="StyledLink-sc-zurfbq-0 vQgHw"
            href="/municipal-industrial"
          >
            learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessAndEducation;
