import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Section from "./Section";

export default function Projects() {
  const projects = [
    {
      title: "Ken Framework",
      titleLink: "https://github.com/matthewLeFevre/Ken-Framework",
      subTitle: "PHP Rest Framework",
      languages: "PHP",
      content: [
        "Thats right I have PHP chops. Or at least I used to.",
        "This is my from scratch attempt to create rest API's. This is comparable to express.",
        "Checkout the Youtube link to go to my tutorial series on how to use it.",
      ],
      links: [
        {
          icon: faYoutube,
          url: "https://www.youtube.com/playlist?list=PL2V-O8IlM_t-wSa8JkqZnt_Qt17yeY-Pt",
        },
        {
          icon: faGithub,
          url: "https://github.com/matthewLeFevre/Ken-Framework",
        },
      ],
    },
    {
      title: "RectifyJS",
      titleLink: "https://github.com/matthewLeFevre/RectifyJS",
      subTitle: "Opionated ODM Library",
      languages: "TS",
      content: [
        "This project illustrates really well how I like to interact with data. A lot can be done with this little library.",
        "I really like the idea of RethinkDB but I have not yet used it in one of my projects... *yet*.",
      ],
      links: [
        {
          icon: faGithub,
          url: "https://github.com/matthewLeFevre/RectifyJS",
        },
        {
          icon: faDatabase,
          url: "https://rethinkdb.com/",
        },
      ],
    },
    {
      title: "Twilio SMS Adapter",
      titleLink: "https://github.com/matthewLeFevre/twilio-sms-adapter",
      subTitle: "Twilio SDK Wrapper",
      languages: "TS",
      content: [
        "At my work I have created a lot of packages. This is one that I use at work that I developed on my own time.",
        "Simple library to send SMS messages quickly the way I like to send them.",
      ],
      links: [
        {
          icon: faGithub,
          url: "https://github.com/matthewLeFevre/twilio-sms-adapter",
        },
      ],
    },
  ];
  return (
    <Section title={{ key: "Projects", value: "projects" }}>
      <details className='project__explanation'>
        <summary className='project__explanation__summary'>
          The last few years have been... busy.
        </summary>
        <p>
          For the past several years my personal projects have suffered. Many of
          them have been dismantled and abandoned. My{" "}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/matthewLeFevre'
          >
            Github Profile
          </a>{" "}
          is a graveyard full of unfinished and now outdated projects. However,
          I am now recommiting myself to put more work into my personal projects
          and invest some time in myself.
        </p>
        <p>
          Despite having few personal achievments I have given the bulk of my
          time/development willpower to my employeer by working harder than I
          ever have to bring about great results. I want to showcase products
          here that are both professional and personal.
        </p>
      </details>
      <section className='project__cards'>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </section>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/matthewLeFevre?tab=repositories'
      >
        My Github Repos...
      </a>
    </Section>
  );
}

function Project({ project }) {
  return (
    <div className='project__card'>
      <h3>
        <a target='_blank' rel='noopener noreferrer' href={project.titleLink}>
          {project.title}
        </a>
      </h3>

      <span>{project.subTitle}</span>
      {project.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {project.links.length > 0 ? (
        <div className='project__card__links'>
          {project.links.map((link, i) => (
            <a target='_blank' rel='noopener noreferrer' href={link.url}>
              <FontAwesomeIcon icon={link.icon} size='lg' color='#70B7DB' />
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
