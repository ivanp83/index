import Head from "next/head";
import React from "react";

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

      {children}
    </>
  );
};

export default Layout;
