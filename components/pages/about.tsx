import React from "react";
import Image from "../../components/image";
type About = {
  title: string;
  image: string;
  text: { title: string; content: Array<string> };
};
type TextBlock = {
  title: string;
  content: { title: string; content: Array<string> };
};
type Approach = {
  title: string;
  content: { title: string; content: Array<string> };
};
type Process = {
  title: string;
  text: Array<TextBlock>;
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
      {data.map((item: any) => (
        <span key={item}>{item}</span>
      ))}
    </p>
  );
  const renderServicesText = (data: any) => {
    return (
      <div className="services-text-block">
        <h3>{data.title}</h3>
        <p>
          {data.content.map((item: any) => (
            <span key={item}>{item}</span>
          ))}
        </p>
      </div>
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
        h1 {
          grid-column: 1/7;
          grid-row: 1;
          padding: 0 var(--gutter-mic);
        }

        .about-title {
          grid-column: 6/7;
          grid-row: 2;
          font-size: 1.6rem;
        }
        .about-text {
          grid-column: 7/13;
          grid-row: 2;
          padding-right: var(--gutter-mic);
        }
        .par {
          display: grid;
          grid-row-gap: var(--gutter-mic);
        }
        .image--1 {
          grid-column: 1/13;
          aspect-ratio: 1.5/1;
          position: relative;
          grid-row: 3;
        }
        .image--2 {
          grid-column: 3/10;
          aspect-ratio: 1.5/1;
          position: relative;
          grid-row: 5;
        }
        .services-title {
          grid-column: 6/7;
          grid-row: 4;
          font-size: 1.6rem;
        }
        .services-text {
          grid-column: 7/13;
          grid-row: 4;
          display: grid;
          grid-row-gap: var(--gutter-mic);
          padding-right: var(--gutter-mic);
        }
        .approach-title {
          grid-column: 6/7;
          grid-row: 6;
          font-size: 1.6rem;
        }
        .approach-text {
          grid-column: 7/13;
          grid-row: 6;
          display: grid;
          grid-row-gap: var(--gutter-mic);
          padding-right: var(--gutter-mic);
        }
        .process-title {
          grid-column: 6/7;
          grid-row: 7;
          font-size: 1.6rem;
        }
        .process-text {
          grid-column: 7/13;
          grid-row: 7;
          display: grid;
          grid-row-gap: var(--gutter-mic);
          padding-right: var(--gutter-mic);
        }
        .dev-text {
          grid-column: 1/7;
          grid-row: 8;
          padding-left: var(--gutter-mic);
          padding-right: var(--gutter-mic);
        }
        .table {
          grid-column: 1/13;
          grid-row: 9;
          padding-left: var(--gutter-mic);
          padding-right: var(--gutter-mic);
        }
        .table h3 {
          border-bottom: 1px solid;
          margin-bottom: 1.6rem;
        }
        .front {
          grid-column: 1/7;
        }
        .back {
          grid-column: 7/13;
        }
        @media all and (max-width: 768px) and (orientation: portrait) {
          h1 {
            font-size: calc(var(--index) * 4.6);
            grid-column: 1/13;
            margin: 0;
          }
          .about-title {
            grid-column: 1/2;
            padding-left: var(--gutter-mic);
          }
          .about-text {
            grid-column: 2/13;
          }
          .image--1 {
            grid-column: 1/13;
          }
          .image--2 {
            grid-column: 1/13;
          }
          .services-title {
            grid-column: 1/2;
            padding-left: var(--gutter-mic);
            font-size: 1.6rem;
          }
          .services-text {
            grid-column: 2/13;
          }
          .approach-title {
            grid-column: 1/2;
            padding-left: var(--gutter-mic);
          }
          .approach-text {
            grid-column: 2/13;
          }
          .process-title {
            grid-column: 1/2;
            padding-left: var(--gutter-mic);
          }
          .process-text {
            grid-column: 2/13;
          }
          .dev-text {
            grid-column: 1/13;
          }
        }
      `}</style>
      <h1>{about.title}</h1>
      <h2 className="about-title">{about.text.title}</h2>
      <div className="about-text">{renderText(about.text.content)}</div>
      <h2 className="services-title">{services.title}</h2>
      <div className="services-text">
        {services.text.map((par: any) => (
          <>{renderServicesText(par)}</>
        ))}
      </div>
      <h2 className="approach-title">{approach.title}</h2>
      <div className="approach-text">{renderText(approach.content)}</div>
      <h2 className="process-title">{process.title}</h2>
      <div className="process-text">
        {process.text.map((par: any) => (
          <>{renderServicesText(par)}</>
        ))}
      </div>
      <div className="image--1">
        <Image src="/images/me2.jpg" width={400} height={400} alt="фото" />
      </div>
      <div className="image--2">
        <Image src={about.image} width={400} height={400} alt="фото" />
      </div>
      <span className="dev-text">{dev.text}</span>
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
            <div key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
