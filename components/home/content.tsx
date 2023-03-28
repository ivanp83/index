import Contacts from "@components/home/contacts";
import IDo from "@components/home/ido";
import Projects from "@components/home/projects";
import React from "react";
import { AppTypes } from "../types";

interface IndexProps {
  content: {
    title: string;
    contacts: AppTypes.ContactsType;
    ido: AppTypes.IDoType;
    projects: { data: Array<AppTypes.ProjectType>; title: string };
  };
}

const Content: React.FC<IndexProps> = ({ content }) => {
  return (
    <article className="home container">
      <style jsx>{`
        .home {
          grid-row-gap: var(--space-med);
          padding: var(--space-small) var(--space-small) var(--space-big);
        }

        h1 {
          grid-column: 3/5;
        }

        @media all and (max-width: 600px) and (orientation: portrait) {
          .home {
            width: 100%;
            grid-row-gap: var(--space-med);
          }
          h1 {
            grid-column: 1/5;
            margin-top: 4rem;
          }
        }
      `}</style>

      <h1>{content.title}</h1>
      <IDo ido={content.ido} />
      <Contacts contacts={content.contacts} />
      <Projects projects={content.projects} />
    </article>
  );
};

export default Content;
