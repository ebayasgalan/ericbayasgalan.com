import React from "react";

const skillsContent = [
  {
    name: "Javascript",
    skillPercent: "95",
  },
  {
    name: "Typescript",
    skillPercent: "95",
  },
  {
    name: "React.Js",
    skillPercent: "95",
  },
  {
    name: "Next.Js",
    skillPercent: "95",
  },
  {
    name: "Node.Js",
    skillPercent: "95",
  },
  {
    name: "Figma",
    skillPercent: "95",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
