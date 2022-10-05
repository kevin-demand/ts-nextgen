import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


const Page = ({ blok }) => (
  
  <main className="text-center " {...storyblokEditable(blok)}>
    
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent className='' blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
