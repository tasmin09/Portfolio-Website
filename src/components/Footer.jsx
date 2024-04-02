import React from "react";
import me from "../assets/portfolio.png"
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Tasmin Ansari</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/tasmin-ansari-360614207/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/heebaaa_03/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/tasmin75/" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
