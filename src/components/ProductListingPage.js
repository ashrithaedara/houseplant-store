import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 10.99,
    thumbnail: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Spider Plant",
    price: 9.99,
    thumbnail: "https://picsum.photos/200/301",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 14.99,
    thumbnail: "https://picsum.photos/200/302",
  },
  {
    id: 4,
    name: "Dracaena",
    price: 12.99,
    thumbnail: "https://picsum.photos/200/303",
  },
  {
    id: 5,
    name: "Philodendron",
    price: 11.99,
    thumbnail: "https://picsum.photos/200/304",
  },
  {
    id: 6,
    name: "Succulent",
    price: 8.99,
    thumbnail: "https://picsum.photos/200/305",
  },
  {
    id: 7,
    name: "Bamboo Palm",
    price: 15.99,
    thumbnail: "https://picsum.photos/200/306",
  },
  {
    id: 8,
    name: "Rubber Plant",
    price: 13.99,
    thumbnail: "https://picsum.photos/200/307",
  },
  {
    id: 9,
    name: "Pothos",
    price: 10.99,
    thumbnail: "https://picsum.photos/200/308",
  },
  {
    id: 10,
    name: "ZZ Plant",
    price: 9.99,
    thumbnail: "https://picsum.photos/200/309",
  },
  {
    id: 11,
    name: "Aloe Vera",
    price: 12.99,
    thumbnail: "https://picsum.photos/200/310",
  },
  {
    id: 12,
    name: "Bromeliad",
    price: 14.99,
    thumbnail: "https://picsum.photos/200/311",
  },
  {
    id: 13,
    name: "Calathea",
    price: 11.99,
    thumbnail: "https://picsum.photos/200/312",
  },
  {
    id: 14,
    name: "Dracaena Marginata",
    price: 13.99,
    thumbnail: "https://picsum.photos/200/313",
  },
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="ProductListingPage">
      {plants.map((plant) => (
        <div className="product" key={plant.id}>
          <img src={plant.thumbnail} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>${plant.price.toFixed(2)}</p>
          <button onClick={() => dispatch(addToCart(plant))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;