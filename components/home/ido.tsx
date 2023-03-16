import React, { FC } from "react";
import { AppTypes } from "../types";
type Props = {
  ido: AppTypes.IDoType;
};

const IDo: FC<Props> = ({ ido }) => {
  return (
    <section className="ido">
      <style jsx>{`
        .ido {
          grid-column: 3/9;
        }
        h2 {
          margin-bottom: var(--space-small);
        }
        .ido span {
          display: block;
        }

        @media all and (max-width: 600px) and (orientation: portrait) {
          .ido {
            grid-column: 1/9;
          }
        }
      `}</style>
      <h2>{ido.title}:</h2>
      {ido.data.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </section>
  );
};

export default IDo;
