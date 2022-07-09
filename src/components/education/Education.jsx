import React from "react";
import "./education.css";

const Education = () => {
  return (
    <section id="education" className="container">
      <h2>Education</h2>
      <div className="institution">
        <div className="clg">
          <h3>Indian Institute of Technology (ISM) Dhanbad</h3>
          <h4>B.Tech in Computer Science and Engineering</h4>
          <h5> December 2020 - May 2024 </h5>
          <h5>CGPA - 7.51</h5>
        </div>
        <div className="school">
          <h3>Axis Academy Sr. Sec. School Alwar</h3>
          <h4>B.Tech in Computer Science and Engineering</h4>
          <h5>Aprail 2018 - May 2020 </h5>
          <h5>Pecentage - 90.20%</h5>
        </div>
      </div>
    </section>
  );
};

export default Education;
