import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
const LangSwitcher = dynamic(() => import("./lang-switcher"), {
  ssr: false,
});
const Header: React.FC = () => {
  const router = useRouter();
  return (
    <header>
      <style jsx>{`
        header {
          position: fixed;
          z-index: 10;
          right: var(--space-small);
          top: var(--space-small);
          display: grid;
          grid-auto-flow: column;
          align-items: baseline;
          grid-gap: 1rem;
        }
        .nav-link {
          border: 1px solid;
          padding: 0rem 3rem;
          border-radius: 50px;
          margin: 0 auto;
          text-transform: uppercase;
          background: var(--main-light);
        }
        @media all and (max-width: 350px) {
          .nav-link {
          }
        }
      `}</style>
      {router.pathname.includes("about") ? (
        <Link href="/">
          <span className="nav-link">главная</span>
        </Link>
      ) : (
        <Link href="/about">
          <span className="nav-link">about</span>
        </Link>
      )}

      <LangSwitcher />
    </header>
  );
};

export default Header;
