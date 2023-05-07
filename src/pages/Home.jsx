import React from "react";
import { me } from "../assets";
import '../styles/home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home__image">
        <img src={me} alt="" />
      </div>
      <div className="home__about">
        <p className="home__aboutParagraph">
          I am a Solution-oriented and problem solver with over three years of
          experience building and maintaining software and software
          architecture. Highly skilled in communication, collaboration, and
          technical documentation, and am very enthusiastic about creating
          high-performing web and mobile applications using the best
          technologies. The tech sector is vast and ever changing which requires
          constant learning and relearning. This is what is most exciting about
          Software Development I am interested in Music, Politics,Agriculture,
          Sports, and I look forward to connecting with you
        </p>
      </div>
    </div>
  );
};

export default Home;
