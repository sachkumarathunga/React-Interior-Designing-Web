import React from "react";
import "./SpotlightSection.css";

const SpotlightSection = () => {
  const spotlightItems = [
    {
      title: "March, 2023 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/7c57bceb-cc61-4b4f-8e13-456030faa6d2_new-leadership-img.jpg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-mar-2023",
    },
    {
      title: "December, 2022 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/f20b1404-7bcc-4383-b08f-31c26836d6c8_Image.jpeg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-dec-2022",
    },
    {
      title: "August, 2022 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/239f1f40-5107-4221-a793-77901e19dddd_StugaVetClinic_036_final_cropped+%282%29.jpg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-aug-2022",
    },
    {
      title: "March, 2022 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/793e0369-d610-4e9d-bfe7-996bb0f13bcc_Weight+Room-1+5-24-19.jpg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-mar-2022",
    },
    {
      title: "October, 2021 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/9ba3908f-8c87-4044-b9f7-afd063cb2d44_IMG_2897.JPG?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-october-2021",
    },
    {
      title: "June, 2021 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/8a056be7-b902-43c8-ab30-13ed884ab41e_IDI+Summer+2020+_+Harrison+High+School_0022+%282%29.jpg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-jun-2021",
    },
    {
      title: "February, 2021 - Spotlight",
      imageUrl:
        "https://images.prismic.io/idi2019/206e7237-2979-40d2-856e-ce248666ec36_Meridian+High+School_00130.jpg?auto=compress,format&w=400&h=232&fit=crop&q=70&fm=pjpg",
      link: "/spotlight/spotlight-february-2021",
    },
  ];

  return (
    <section className="spotlight-section">
      <div className="container">
        <div className="news-content">
          <div className="news-heading">
            <h1 className="news-title">Our Success Stories</h1>
          </div>
        </div>
        <div className="img-grid">
          {spotlightItems.map((item, index) => (
            <div className="grid-item" key={index}>
              <a href={item.link} style={{ display: "block" }}>
                <div className="angled-img">
                  <div className="ratio-img-wrapper">
                    <img
                      alt={item.title}
                      className="ratio-img"
                      src={item.imageUrl}
                    />
                  </div>
                </div>
                <h2 className="item-heading">{item.title}</h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
