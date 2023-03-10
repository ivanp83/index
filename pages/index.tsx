import { GetStaticProps, InferGetStaticPropsType } from "next";
import Layout from "@components/layout";
import Content from "@components/pages/index";
import { AppTypes } from "@components/types";
import { connectDB } from "@utils/connection";
import { Page } from "@models/page.model";
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
      <article>
        <Content {...{ content, projects }} />
      </article>
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
