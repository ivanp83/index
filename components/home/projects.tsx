import React, { FC, useState } from "react";
import Image from "@components/image";
import { AppTypes } from "../types";
import ProjectItem from "./project-item";
type Props = {
  projects: { title: string; data: AppTypes.ProjectType[] };
};

const Projects: FC<Props> = ({ projects }) => {
  return (
    <section className="projects">
      <style jsx>{`
        .projects {
          grid-column: 3/9;
        }
        h2 {
          margin-bottom: var(--space-small);
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .projects {
            grid-column: 1/9;
            margin-top: var(--space-med);
          }
        }
      `}</style>
      <h2>{projects.title}</h2>
      <ul>
        {projects.data.map((project, i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
