import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";
import CustoHead from "../common/components/header/custo_head";
import Layout from "../common/components/layout/Layout";



export default function Home({ story }) {
  story = useStoryblokState(story);

  return (
    
    <div>
      <CustoHead />
      <Layout>
      <StoryblokComponent blok={story.content} />
    </Layout>
    </div>
  );
}

export async function getStaticProps() {
  let slug = "home";

  let sbParams = {
    version: "draft", // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
