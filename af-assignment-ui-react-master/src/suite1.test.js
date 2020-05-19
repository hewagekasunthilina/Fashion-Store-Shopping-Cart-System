// Cart -> CartItem
import React from "react";
import ItemCard from "../src/components/Items/ItemCard";
import ItemsPage from "../src/components/Pages/ItemsPage";
import AddManagerUser from "../src/components/User/AddManagerUser";
import { render } from "@testing-library/react";

test("Validate input labels in Add Manager page", () => {
  const { getByText } = render(<AddManagerUser />);
  const nameLabel = getByText(/Name/i);
  const emailLabel = getByText(/Email/i);
  const passwordLabel = getByText(/Password/i);
  expect(nameLabel).toBeInTheDocument();
  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});

test("Validate ItemCard for an item", () => {
  const item = {
    title: "iPhone 11",
    body: "Dual Camera, HD Display",
    price: 150000,
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021766023",
    discount: 10,
  };

  const { getByText } = render(<ItemCard item={item} />);
  const title = getByText(/iPhone 11/i);
  const price = getByText(/150000/i);
  const discount = getByText(/10% off/i);
  expect(title).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(discount).toBeInTheDocument();
});

test("Validate a list of items rendering properly", () => {
  const items = [
    {
      title: "iPhone 11",
      body: "Dual Camera, HD Display",
      price: 150000,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021766023",
      discount: 10,
    },
    {
      title: "MacBook Pro",
      body: "13, Core i5 @ 2.5Ghz",
      price: 250000,
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021766023",
      discount: 15,
    },
  ];

  const { getByText } = render(<ItemsPage items={items} />);
  const titleItemTwo = getByText(/MacBook Pro/i);
  const priceItemOne = getByText(/150000/i);
  const priceItemTwo = getByText(/250000/i);
  expect(titleItemOne).toBeInTheDocument();
  expect(titleItemTwo).toBeInTheDocument();
  expect(priceItemOne).toBeInTheDocument();
  expect(priceItemTwo).toBeInTheDocument();

});
