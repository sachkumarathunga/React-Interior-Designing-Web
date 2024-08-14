import React from "react";
import "./RelatedProjects.css";
import projectImage1 from "../images/projects/1_c.jpg";
import projectImage2 from "../images/projects/1_c.jpg";

const UniqueSection = () => {
  return (
    <section className="uniqueBeNxCw">
      <div className="uniqueEBZEyY">
        <div className="uniqueECjdAA">
          <h2 className="uniqueFLhVRG">Our New Projects</h2>
        </div>
        <div className="uniqueWOhqI">
          <div className="uniqueDZUreZ">
            <a href="/projects/new-project-1" aria-label="New Project 1">
              <div className="uniqueEEDwbc">
                <div className="uniqueBlhpmN">
                  <img
                    src={projectImage1}
                    alt="New Project 1"
                    className="uniqueDWepAz"
                  />
                </div>
              </div>
              <div className="uniqueCoZWpe">
                <h3 className="uniqueStwfE">New Project 1</h3>
                <span className="uniqueJxeAbl">Learn more</span>
              </div>
            </a>
          </div>
          <div className="uniqueDZUreZ">
            <a href="/projects/new-project-2" aria-label="New Project 2">
              <div className="uniqueEEDwbc">
                <div className="uniqueBlhpmN">
                  <img
                    src={projectImage2}
                    alt="New Project 2"
                    className="uniqueDWepAz"
                  />
                </div>
              </div>
              <div className="uniqueCoZWpe">
                <h3 className="uniqueStwfE">New Project 2</h3>
                <span className="uniqueJxeAbl">Learn more</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
