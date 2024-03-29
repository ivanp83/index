import Head from "next/head";
import React from "react";
import Footer from "./footer";

interface ILayoutProps {
  children: React.ReactNode | React.ReactNode[];
  title: string;
  description: string;
}

const Layout = ({ children, title, description }: ILayoutProps) => {
  return (
    <>
      <Head>
        <title key={title}>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main> {children}</main>
      <Footer />
    </>
  );
};

export default Layout;
