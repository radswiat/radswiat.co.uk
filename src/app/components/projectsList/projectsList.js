import React, { Component } from "react";
import PropTypes from "prop-types";

import "./projectsList.scss";

const projects = [
  {
    title: "Minecraft",
    img: "assets/game-minecraft.png",
    desc: "Three JS",
    link: "http://minecraft.radswiat.co.uk"
  },
  {
    title: "Poke",
    img: "assets/game-poke.png",
    desc: "Vanilla JS",
    link: "http://poke.radswiat.co.uk"
  },
  {
    title: "Mario",
    img: "assets/game-mario.png",
    desc: "Vanilla JS",
    link: "http://mario.radswiat.co.uk"
  },
  {
    title: "Shaders",
    img: "assets/game-shaders.png",
    desc: "Vanilla JS",
    link: "http://shaders.radswiat.co.uk"
  }
];

export default class ProjectsList extends Component {
  render() {
    return (
      <div styleName="list">
        {projects.map((project, key) => {
          return (
            <a styleName="list__item" href={project.link} target="_blank">
              <div styleName="list__item" key={key} style={{ background: `url(${project.img})` }}>
                <div styleName="list__title">
                  {project.title} - {project.desc}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
