import { Parallax } from "react-parallax";

const Cover = ({ bgCoverImg, heading, headingText, title, content, style }) => {
  return (
    <>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={bgCoverImg}
        bgImageAlt="Cover photo"
        strength={-200}
        className={`px-14 md:px-28 ${style}`}
      >
        <section className="bg-black bg-opacity-50 my-14 md:my-24 py-20 max-w-6xl mx-auto">
          <div className="px-8 md:px-12 lg:px20 text-white text-center space-y-3">
            <h1 className="text-7xl font-bold font-Cinzel uppercase">
              {heading}
            </h1>
            <p className="max-w-3xl mx-auto uppercase">{headingText}</p>
            <h2 className="text-5xl font-Cinzel font-semibold uppercase">
              {title}
            </h2>
            <p className="max-w-3xl mx-auto">{content}</p>
          </div>
        </section>
      </Parallax>
    </>
  );
};
export default Cover;
