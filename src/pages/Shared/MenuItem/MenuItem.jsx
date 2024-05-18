const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <>
      <div className="flex gap-5">
        <img
          className="w-24 h-20 rounded-r-full rounded-b-full"
          src={image}
          alt={name}
        />
        <div className="space-y-2">
          <h3 className="uppercase text-[#151515]">{name} --------------></h3>
          <p className="text-[#737373]">{recipe} </p>
        </div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </>
  );
};
export default MenuItem;
