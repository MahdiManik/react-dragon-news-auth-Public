import React, { useEffect, useState } from "react";
import Category from "./Category";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-10">All Categories</h3>
      {categories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default LeftSideNav;
