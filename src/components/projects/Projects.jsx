import React from "react";
import "./projects.css";

import Project1 from "../../assets/project3.png";
import Project2 from "../../assets/project4.png";
import Project3 from "../../assets/project5.png";

const data = [
  
  {
    id: 1,
    image: Project1,
    title: "Book Recommendation System",
    description:
      "AVM-Book-recommender is a book recommendation system. It suggests the similar type of books that we searched for.In this, Web application is created using Python, Flask, HTML, CSS, JavaScript and sklearn library, pickle, jupiter notebook is used for model building",
    github: "https://github.com/AVMktl/book-rec-sys",
    preview: "",
  },
  {
    id: 2,
    image: Project2,
    title: "Ecommerce website",
    description:
      "Created front-end of a responsive eCommerce website named “ShopIN” using front-end technologies React.js and JavaScript.This provides a user-friendly front-end interface of Home, Register, Login, Product Page, and Cart Pages",
    github: "https://github.com/AVMktl/shopin-website",
    preview: "",
  },
  {
    id: 3,
    image: Project3,
    title: "Quizzing Website",
    description:
      "Created a Quizzing website “AVM Quizz” using front-end technologies like React.js and JavaScript having an attractive UI. This provides an interface like “Who wants to be a Millionaire”. It has a user-friendly interface, sound effects, a timer, and different questions",
    github: "https://github.com/AVMktl/AVM-Quizz",
    preview: "https://avm-quizz.netlify.app/",
  },  

];

data.reverse();

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, description, github,preview }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3 className="proj-heading">{title}</h3>
              <h5>{description}</h5>
              <div className="link-container">
                <a href={github} className="btn btn-primary">
                  Github
                </a>
                <a href={preview} className="btn ">
                  Preview
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
