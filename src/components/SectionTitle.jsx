const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="max-w-md mx-auto text-center pb-10 space-y-2">
      <p className="text-[#D99904] ">---{subHeading}---</p>
      <h2 className="text-4xl uppercase py-3 border-y-4">{heading}</h2>
    </div>
  );
};
export default SectionTitle;
