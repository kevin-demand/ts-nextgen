import { render } from 'storyblok-rich-text-react-renderer';
 
const Article = ({ blok }) => {
  return (
    <section className="">
      <div className="container">
        <img
          className=" img-repsonsive"
          alt={blok.image.alt}
          src={blok.image.filename}
        />
        <div className="text-center">
          <h1 className="">
            {blok.title}
          </h1>
          <h1 className="">
            {blok.subtitle}
          </h1>
          <div className="mb-8 text-justify">{render(blok.content)}</div>
        </div>
      </div>
    </section>
  );
};
export default Article;