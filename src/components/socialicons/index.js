import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.scholar && (
          <li>
            <a href={socialprofils.scholar}>
              <SiGooglescholar />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};

