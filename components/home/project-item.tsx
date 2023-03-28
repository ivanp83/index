import { AppTypes } from "@components/types";
import React, { FC, useState, useRef, useEffect } from "react";

type Props = {
  project: AppTypes.ProjectType;
};

const ProjectItem: FC<Props> = ({ project }) => {
  const [state, setState] = useState<boolean>(true);
  const ref = useRef<HTMLLIElement>(null);
  const elWidth = useRef<number>(0);
  useEffect(() => {
    if (ref.current) {
      elWidth.current = ref.current.getBoundingClientRect().width;
    }
  }, []);
  return (
    <li key={project.id} ref={ref}>
      <style jsx>{`
        li {
          overflow: hidden;
          padding-top: var(--space-small);
          border-bottom: 1px solid;
          display: grid;
        }
        .heading {
          background-color: var(--main-light);
          cursor: pointer;
        }
        .heading,
        .content {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-column-gap: var(--space-small);
        }
        .content {
          margin-top: var(--space-small);
          height: ${state ? "100%" : "0px"};
        }
        h3 {
          grid-column: 1/3;
        }
        .sub {
          grid-column: 4/6;
        }
        .date {
          grid-column: 6/7;
          text-align: right;
        }

        .video {
          grid-column: 1/9;

          width: 100%;
          object-fit: cover;
        }
        .text-description {
          grid-column: 1/9;

          margin-bottom: 1rem;
        }
        .link {
          grid-column: 1/9;
          margin-bottom: var(--space-small);
          text-decoration: underline;
          margin-top: auto;
          margin-bottom: 5rem;
        }
        @media all and (max-width: 1024px) and (orientation: portrait) {
          .video {
            margin-bottom: 0;
            height: calc(100vw / 16 * 9 - var(--space-small));
          }
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .date {
            display: none;
          }
          .sub {
            grid-column: 4/7;
            text-align: right;
          }
        }
      `}</style>
      <div className="heading">
        <h3>{project.title}</h3>
        <span className="sub">{project.sub}</span>
        <span className="date">{project.date}</span>
      </div>
      <div className="content">
        <video
          className="video"
          preload="yes"
          autoPlay
          loop
          muted
          poster={project.banner}
        >
          <source src={project.video.mp4} type="video/mp4" />
        </video>
        <span className="text-description">{project.text}</span>
        <a
          href={project.url}
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.url}
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
