import { useRouter } from "next/router";
import Link from "next/link";

export default function LangSwitcher() {
  const router = useRouter();

  return (
    <ul className="lang">
      <style jsx>{`
        .lang {
          display: flex;
          width: fit-content;
          grid-column: 8/9;
          justify-self: end;
        }
        li {
          line-height: 1;
        }
        li:not(:last-child) {
          margin-right: 0.5rem;
          padding-right: 0.5rem;
          border-right: 1px solid;
        }

        .nav-link-text {
          font-size: 16px;
          text-decoration: none;
          color: var(--main-dark);
          position: relative;
        }

        .nav-link-text.active {
          opacity: 0.5;
        }
      `}</style>
      {router?.locales?.map((locale) => (
        <li key={locale}>
          <Link href={router.asPath} locale={locale}>
            <span
              className={`nav-link-text ${
                router.locale === locale && "active"
              }`}
            >
              {locale}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
