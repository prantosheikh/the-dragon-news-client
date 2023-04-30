import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorLeft from "../../EditorLeft/EditorLeft";

const LeftNav = () => {
  const [categories, setCategrories] = useState([]);
  console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategrories(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h4 className="">All Caterogy</h4>
      <div className="ps-4">
        {categories.map((categorie) => (
          <p className="fst-normal" key={categorie.id}>
            <Link
              className="text-decoration-none text-secondary"
              to={`/category/${categorie.id}`}
            >
              {categorie.name}
            </Link>
          </p>
        ))}
      </div>
      <EditorLeft></EditorLeft>
    </div>
  );
};

export default LeftNav;
