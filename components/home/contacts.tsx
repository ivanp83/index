import React, { FC } from "react";

import { AppTypes } from "../types";
type Props = { contacts: AppTypes.ContactsType };

const Contacts: FC<Props> = ({ contacts }) => {
  return (
    <section className="contacts">
      <style jsx>{`
        .contacts {
          grid-column: 3/9;
        }
        .contacts a {
          display: block;
          text-decoration: underline;
        }
        h2 {
          margin-bottom: var(--space-small);
        }
        @media all and (max-width: 600px) and (orientation: portrait) {
          .contacts {
            grid-column: 1/9;
          }
        }
      `}</style>
      <h2>{contacts.title}</h2>
      <a
        href={`mailto:${contacts.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Email
      </a>
      <a
        href={`https://t.me/${contacts.telegram}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Telegram
      </a>
    </section>
  );
};

export default Contacts;
