import React from "react";

export default function Footer() {
  return (
    <footer className="container">
      <style jsx>{`
        footer {
          padding: 1rem var(--space-small);
        }
        img {
          width: 20px;
          height: 20px;
          object-fit: cover;
        }
        .social {
          width: fit-content;
          display: grid;
          grid-auto-flow: column;
          grid-gap: 10px;
        }
      `}</style>
      <div className="social">
        <a
          href={`mailto:ivan.pozdnyakov83@yandex.ru`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/email.png" alt="Иконка email" />
        </a>
        <a
          href={`https://t.me/eachpw`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/telegram.png" alt="Иконка telegram" />
        </a>
        <a
          href="viber://chat?number=%2B79527900015"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/viber.png" alt="Иконка viber" />
        </a>
      </div>
    </footer>
  );
}
