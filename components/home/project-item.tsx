import { AppTypes } from "@components/types";
import React, { FC, useState, useRef, useEffect } from "react";

type Props = {
  project: AppTypes.ProjectType;
};

const ProjectItem: FC<Props> = ({ project }) => {
  const [state, setState] = useState<boolean>(false);
  const ref = useRef<HTMLLIElement>(null);
  const elWidth = useRef<number>(0);
  useEffect(() => {
    if (ref.current) {
      elWidth.current = ref.current.getBoundingClientRect().width;
    }
  }, []);
  return (
    <li key={project.id} onClick={() => setState(!state)} ref={ref}>
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
          height: calc(${elWidth.current + "px"} / 4 * 3);
        }
        .link {
          grid-column: 1/9;
          margin-bottom: var(--space-small);
          text-decoration: underline;
          margin-top: auto;
          margin-bottom: 5rem;
          display: block;
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .video {
            margin-bottom: 0;
          }
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
          preload="metadata"
          muted
          playsInline
          autoPlay
          loop
        >
          <source src={project.video.mp4} type="video/mp4" />
          <source src={project.video.webm} type="video/webm" />
          <source
            src="video/tears-of-steel-battle-clip-medium.ogg"
            type="video/ogg"
          />
          <object
            type="application/x-shockwave-flash"
            data={`flash-player.swf?videoUrl=${project.video.mp4}`}
            width="1024"
            height="576"
          >
            <param
              name="movie"
              value={`flash-player.swf?videoUrl=${project.video.mp4}`}
            />
            <param name="allowfullscreen" value="true" />
            <param name="wmode" value="transparent" />
            <param
              name="flashvars"
              value={`controlbar=over&amp;image=img/banner.jpg&amp;file=flash-player.swf?videoUrl=${project.video.mp4}`}
            />
          </object>
        </video>

        <a href={project.url} className="link">
          {project.url}
        </a>
      </div>
    </li>
  );
};

export default ProjectItem;
