import "../styles/globals.css";
import type { AppProps } from "next/app";
import globalStyles from "@styles/global";
import ErrorBoundary from "@components/errors/ErrorBoundary";
import Header from "@components/header/header";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <style jsx global>
        {globalStyles}
      </style>
      <Header />
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
