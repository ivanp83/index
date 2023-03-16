import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Layout from "@components/layout";
import Content from "@components/about/content";
import { connectDB } from "@utils/connection";
import { Page } from "@models/page.model";
import { AppTypes } from "@components/types";
const About: NextPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    seo: { title, description },
    about,
    approach,
    process,
    services,
    dev,
  } = data;

  return (
    <Layout title={title} description={description}>
      <article className="container">
        <Content {...{ about, approach, process, services, dev }} />
      </article>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    connectDB();

    const page: AppTypes.PageType = await Page.findOne({
      name: "about",
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

export default About;
