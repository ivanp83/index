import type { AppProps } from "next/app";
import globalStyles from "@styles/global";
import ErrorBoundary from "@components/errors/ErrorBoundary";
import Header from "@components/header/header";

import { pageview } from "lib/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@lib/gtag";
const isProduction = process.env.NODE_ENV === "production";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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
