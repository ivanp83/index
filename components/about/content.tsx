import React from "react";
import Image from "../image";
type About = {
  title: string;
  image: string;
  text: string;
};
type TextBlock = {
  title: string;
  content: { title: string; content: Array<string> };
};
type Approach = {
  title: string;
  text: string;
};
type Process = {
  title: string;
  text: string;
};
type Services = {
  title: string;
  text: Array<TextBlock>;
};
type Dev = {
  text: string;
  front: Array<string>;
  back: Array<string>;
};

interface PageProps {
  about: About;
  approach: Approach;
  process: Process;
  services: Services;
  dev: Dev;
}

const Content: React.FC<PageProps> = ({
  about,
  approach,
  process,
  services,
  dev,
}) => {
  const renderText = (data: any) => (
    <p className="par">
      {data.map((item: any, i: number) => (
        <span key={i}>{item}</span>
      ))}
    </p>
  );

  return (
    <article className="about container">
      <style jsx>{`
        .about {
          grid-column: 1/9;
          grid-column-gap: var(--space-small);
          grid-row-gap: var(--space-med);
          padding: var(--space-small) var(--space-small) var(--space-big);
        }
        .heading-tmp {
          display: contents;
        }
        h1 {
          grid-column: 3/9;
        }
        section {
          grid-column: 3/9;
        }

        .about-me {
          grid-column: 1/9;
          display: grid;
          grid-gap: 1rem;
          grid-auto-flow: row;
        }
        .about-me p {
          grid-column: 3/9;
          display: grid;
          grid-gap: var(--space-small);
          grid-auto-flow: row;
        }

        .image {
          grid-column: 3/9;
          height: calc((var(--container-width) * 0.7) / 16 * 9);
          position: relative;
          grid-row: 2;
        }

        .services,
        .process,
        .approach {
          grid-column: 3/9;
          display: grid;
          grid-row-gap: 1rem;
          grid-auto-flow: row;
        }
        .services-text,
        .approach-text,
        .process-text {
          display: grid;
          grid-row-gap: 1rem;
        }
        .table {
          grid-column: 1/9;
        }
        .table h3 {
          border-bottom: 1px solid;
          margin-bottom: 1rem;
        }
        .front {
          grid-column: 3/6;
        }
        .back {
          grid-column: 6/9;
        }
        .back span {
          display: block;
          font-size: 16px;
        }

        @media all and (max-width: 1024px) and (orientation: portrait) {
          .about-me {
            grid-row: 2;
          }
          .image {
            height: calc((100vw * 0.7) / 4 * 3);
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .heading-tmp {
            display: grid;
            grid-column: 1/9;
            margin-top: 4rem;
            grid-gap: var(--space-small);
          }
          h1 {
            grid-column: 1/5;
          }
          .about-me {
            grid-row: 2;
          }

          .about-me p,
          .services,
          .process,
          .approach {
            grid-column: 1/9;
          }
          .front {
            grid-column: 1/5;
          }
          .back {
            grid-column: 5/9;
          }

          .image {
            grid-column: 1/9;
            height: calc(100vw / 4 * 3);
          }
        }
      `}</style>
      <div className="heading-tmp container">
        <h1>{about.title}</h1>
        <div className="about-me container">
          <p>{about.text}</p>
          <div className="image">
            <Image src={about.image} alt="фото" />
          </div>
        </div>
      </div>

      <section className="services">
        <h2>{services.title}</h2>
        <div className="services-text">
          {services.text.map((par: any) => (
            <span key={par}>{par}</span>
          ))}
        </div>
      </section>

      <section className="process">
        <h2>{process.title}</h2>
        <div className="process-text">{process.text}</div>
      </section>
      <section className="approach">
        <h2>{approach.title}</h2>

        <p className="par">{approach.text}</p>
      </section>

      <div className="table container">
        <div className="front">
          <h3>Frontend</h3>
          {dev.front.map((item: any) => (
            <div key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="back">
          <h3>Backend</h3>
          {dev.back.map((item: any) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Content;
