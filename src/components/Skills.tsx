import React from "react";
import Section from "./Section";

export default function Skills() {
  const skills = [
    {
      title: "ReactJS",
      content: [
        "React is my tool of choice when building user interfaces regardless of the platform or medium (web, mobile, native).",
      ],
    },
    {
      title: "NodeJS/Express",
      content: [
        "So far I haven't found a technical/service problem that could not be solved with NodeJS. There is no quicker way for me to deliver on product requirements than to use these backend technologies.",
      ],
    },
    {
      title: "SCSS/CSS",
      content: [
        "I love making things look good and I will always give it my best to design the most intuitive and astetically pleasing user interface I can.",
      ],
    },
  ];
  return (
    <Section title={{ key: "Skills", value: "skills" }}>
      <section className='skill__box'>
        {skills.map((skill, i) => (
          <div key={i} className='skill__card'>
            <h3 className='skill__badge'>{skill.title}</h3>
            {skill.content.map((data, j) => (
              <p key={j}>{data}</p>
            ))}
          </div>
        ))}
      </section>
      <a
        className='skill__link'
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/matthew-lefevre/details/skills'
      >
        Check out my other skills...
      </a>
    </Section>
  );
}
