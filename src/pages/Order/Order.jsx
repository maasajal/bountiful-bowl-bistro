import Cover from "../Shared/Cover/Cover";

import orderCover from "../../assets/shop/banner2.jpg";

const Order = () => {
  return (
    <>
      <Cover
        bgCoverImg={orderCover}
        heading="Order Food"
        headingText="Would you like to try a dish?"
        style="pt-24"
      />
    </>
  );
};
export default Order;
