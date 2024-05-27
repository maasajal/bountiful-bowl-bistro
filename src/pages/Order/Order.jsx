import Cover from "../Shared/Cover/Cover";

import orderCover from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import "./Order.css";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Cover
        bgCoverImg={orderCover}
        heading="Order Food"
        headingText="Would you like to try a dish?"
        style="pt-24"
      />
      <div className="max-w-6xl mx-auto px-2 md:px-4 py-16">
        <section className="my-20">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className="text-center">
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <OrderTab items={salad} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={pizza} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={soup} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={dessert} />
            </TabPanel>
            <TabPanel>
              <OrderTab items={drinks} />
            </TabPanel>
          </Tabs>
        </section>
      </div>
    </>
  );
};
export default Order;
