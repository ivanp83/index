import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";

const LangSwitcher = dynamic(() => import("./lang-switcher"), {
  ssr: false,
});
const Header: React.FC = () => {
  const router = useRouter();
  const curLocale = router.locale === "en" ? "en" : "ru";
  return (
    <header className="header container ">
      <style jsx>{`
        .header {
          padding: var(--space-small);
          width: var(--container-width);
          position: fixed;
          z-index: 10;
          top: 0;
          left: 0;
          display: grid;
          grid-auto-flow: column;
          align-items: baseline;
          grid-column-gap: var(--space-small);
        }
        .logo {
          grid-column: 1/5;
          font-weight: 700;
        }
        nav {
          grid-column: 6/8;
        }
        .nav-link {
          margin: 0 auto;
          color: var(--main-dark);
        }
        main {
          padding: var(--space-small);
        }
      `}</style>
      <span className="logo">
        {" "}
        {router.locale === "en" ? "Ivan Pozdnyakov" : "Иван Поздняков"}
      </span>
      <nav>
        {router.pathname.includes("about") ? (
          <Link href="/">
            <span className="nav-link">
              {router.locale === "en" ? "Index" : "Главная"}
            </span>
          </Link>
        ) : (
          <Link href="/about">
            <span className="nav-link">
              {router.locale === "en" ? "About" : "Кто я"}
            </span>
          </Link>
        )}
      </nav>

      <LangSwitcher />
    </header>
  );
};

export default Header;
