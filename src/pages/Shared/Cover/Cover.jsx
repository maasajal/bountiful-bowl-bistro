import { Parallax } from "react-parallax";

const Cover = ({ bgCoverImg, title, content, style }) => {
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
            <h2 className="text-3xl font-Cinzel uppercase">{title}</h2>
            <p className="max-w-3xl mx-auto">{content}</p>
          </div>
        </section>
      </Parallax>
    </>
  );
};
export default Cover;
