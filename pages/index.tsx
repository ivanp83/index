import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "@components/layout";
import Content from "@components/home/content";
import { AppTypes } from "@components/types";
import { connectDB } from "@utils/connection";
import { Page } from "@models/page.model";
import Canvas from "@components/canvas";

export default function IndexPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    seo: { title, description },
    content,
    projects,
  } = data;

  return (
    <Layout title={title} description={description}>
      <Content {...{ content, projects }} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    connectDB();

    const page: AppTypes.PageType = await Page.findOne({
      name: "home",
    })
      .select(`data.${ctx.locale} name`)
      .lean();
    console.log(page.data[ctx.locale as string]);
    return {
      props: { data: page.data[ctx.locale as string] },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
