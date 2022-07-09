import React from "react";
import "./experience.css";

const experience_data = [
  {
    id: 1,
    title: 'Microsoft Engage 2022',
    timeline: 'April 2022 - May 2022',
    description: `Developed a book recommendation system which suggests the similar
    type of books that we searched for. Ih this, Web application is
    created using Python, Flask, HTML, CSS, JavaScript and sklearn
    library, pickle, jupiter notebook is used for model building`
  }
]

const Experience = () => {
  return (
    <section id="experience">
      <h2 className="text-light">Experience</h2>

      {
        experience_data.map(({id, title, timeline, description}) => {
          return(
            <article key={id} className="experience__card container">
            <div className="timeline"><span className="experience-dot"></span></div>
            <div className="experience__content">
              <h3>{title}</h3>
              <h5>{timeline}</h5>
              <p className="exp-desc">
                {description}
              </p>
            </div>
          </article>
          );
        })
      }
    </section>
  );
};

export default Experience;
