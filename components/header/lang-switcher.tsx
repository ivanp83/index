import { useRouter } from "next/router";
import Link from "next/link";

export default function LangSwitcher() {
  const router = useRouter();

  return (
    <ul className="list-items">
      <style jsx>{`
        .list-items {
          display: flex;
          width: fit-content;
        }
        li {
          line-height: 1;
        }
        li:not(:last-child) {
          margin-right: 0.5rem;
          padding-right: 0.5rem;
          border-right: 1px solid;
        }

        .nav-link {
          text-decoration: none;
          color: inherit;
          position: relative;
        }

        .nav-link.active {
          opacity: 0.5;
        }
      `}</style>
      {router?.locales?.map((locale) => (
        <li key={locale}>
          <Link href={router.asPath} locale={locale}>
            <span
              className={`nav-link ${router.locale === locale && "active"}`}
            >
              {locale}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
