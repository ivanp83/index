import Image from "@components/image";
import React from "react";

type ContactsData = "email" | "telegram";

type Contacts = Record<ContactsData, string>;
type IDO = { title: string; data: Array<string> };

type Content = {
  title: string;
  contacts: Contacts;
  ido: IDO;
  projects: Array<Project>;
};
type Project = {
  banner: string;
  title: string;
  id: number;
  sub: string;
  url: string;
};

interface IndexProps {
  content: Content;
  projects: { data: Array<Project>; title: string };
}

const Content: React.FC<IndexProps> = ({ content, projects }) => {
  const renderText = (data: string) => {
    return (
      <>
        {data.split(" ").map((item, i: number) => (
          <span key={i} className={`word word--${i}`}>
            <style jsx>{`
              .word {
                display: block;
              }
              .word--0 {
                grid-row: 1;
                grid-column: 1/13;
              }
              .word--1 {
                grid-row: 2;
                grid-column: 1/13;
              }
              .word--2 {
                grid-row: 3;
                grid-column: 2/13;
                color: red;
              }
              .word--3 {
                grid-row: 4;
                grid-column: 2/13;
              }
              .word--4 {
                grid-row: 5;
                grid-column: 7/13;
                background-image: linear-gradient(
                  to right,
                  #329a0b,
                  #53b212,
                  #1cbf1b
                );
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
              }
              .word--5 {
                grid-row: 6;
                grid-column: 7/13;
                background-image: linear-gradient(
                  to right,
                  #0c37d6,
                  #7643c2,
                  #423490
                );
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
              }
              .word--6 {
                grid-row: 6;
                grid-column: 1/4;
              }
            `}</style>
            {item}
          </span>
        ))}
      </>
    );
  };

  return (
    <section className="content-section container">
      <style jsx>{`
        .content-section {
          width: 100%;
          grid-row-gap: var(--space-med);
          padding: var(--space-small);
        }
        .wrapp,
        .content-wrapp {
          display: contents;
        }
        h1 {
          grid-column: 1/13;
          grid-row: 1;
          padding: 0 var(--gutter-mic);
          grid-template-rows: repeat(5, min-content);
        }
        .word {
          display: block;
        }
        .word--0 {
          grid-row: 1;
          grid-column: 1/4;
        }
        .word--1 {
          grid-row: 2;
          grid-column: 1/4;
        }
        .projects figure {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          aspect-ratio: 4/3;
        }

        .projects figure:nth-of-type(even) {
          grid-column: 2/3;
        }
        .projects figure:nth-of-type(odd) {
          grid-column: 1/2;
        }
        .projects figure:nth-of-type(1) {
          background: #dfdfdf;
        }
        .projects figure .image {
          height: 100%;
          width: 100%;
          position: relative;
          filter: brightness(0.9);
        }
        .projects figure figcaption {
          width: 70%;
          position: absolute;
          padding: var(--space-small);
          z-index: 10;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .projects figure figcaption h3 {
          font-size: calc(var(--index) * 6);
        }
        .projects figure figcaption span,
        .contacts span a {
          font-size: calc(var(--index) * 3);
        }
        .projects figure figcaption a {
          text-decoration: underline;
        }

        .ido {
          grid-column: 1/7;
        }
        .ido span {
          display: block;
        }
        .contacts {
          grid-column: 7/13;
        }
        .contacts a {
          display: block;
        }
        .contacts a {
          text-decoration: underline;
        }
        .ido span,
        .contacts a {
          font-size: 3rem;
        }
        .projects {
          grid-column: 1/13;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: var(--space-small);
        }

        @media all and (max-width: 1400px) {
          figcaption h3 {
            font-size: calc(var(--index) * 4);
          }
          figcaption span {
            font-size: calc(var(--index) * 2);
          }
        }

        @media all and (max-width: 1024px) and (orientation: portrait) {
          .wrapp {
            grid-column: 1/13;
            display: grid;
            min-height: calc(100vh - var(--space-med));
          }
          .projects {
            grid-template-columns: 1fr;
            grid-column-gap: 0;
          }
          .projects figure figcaption h3 {
            font-size: 3.6rem;
          }

          .projects figure:nth-of-type(even) {
            grid-column: 1/2;
          }
          .projects figure:nth-of-type(odd) {
            grid-column: 1/2;
          }
        }

        @media all and (max-width: 600px) and (orientation: portrait) {
          .content-wrapp {
            grid-column: 1/13;
            grid-template-columns: repeat(12, 1fr);
            display: grid;
            height: fit-content;
            margin-top: auto;
          }

          .ido span,
          .contacts a {
            font-size: 1.6rem;
          }
          .projects figure figcaption {
            padding: var(--space-mic);
          }
          .projects figure figcaption h3 {
            font-size: 2.2rem;
          }
          .projects figure figcaption span,
          .projects figure figcaption a {
            font-size: 1.6rem;
          }
        }
      `}</style>
      <div className="wrapp container">
        <h1 className="container">{renderText(content.title)}</h1>
        <div className="content-wrapp">
          <div className="ido">
            <h2>{content.ido.title}:</h2>
            {content.ido.data.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="contacts">
            <h2>Contact me:</h2>
            <a href={`mailto:${content.contacts.email}`}>Email</a>
            <a href={`tg://resolve?domain=<${content.contacts.telegram}>`}>
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div className="projects">
        {projects.data.map((project) => (
          <figure key={project.id}>
            <figcaption>
              <div>
                <h3>{project.title}</h3>
                <span>{project.sub}</span>
              </div>

              <a href={project.url}>{project.url}</a>
            </figcaption>
            <div className="image">
              <Image src={project.banner} alt={project.title} fill />
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Content;
