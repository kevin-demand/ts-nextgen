import { storyblokEditable } from '@storyblok/react';
import { render } from 'storyblok-rich-text-react-renderer';

const Hero = ({ blok }) => {
  return (
    <div
      {...storyblokEditable(blok)}
      className={`min-h-[500px]
    relative
    flex
    items-end
    justify-center
    p-9
    
    rounded-[5px]
    overflow-hidden ${
      blok.layout === 'constrained' ? 'container mx-auto' : ''
    }`}
    >
      {/* <div className="relative z-10 text-center">
        <h1 className="text-6xl text-white font-bold mb-3">{blok.Headline}</h1>
        <h2 className="text-4xl text-white font-light">{render(blok.herosubheadline)}</h2>
      </div> */}
      <img
        src={blok.hero_image.filename}
        alt={blok.hero_image.alt}
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
