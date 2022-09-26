import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { listProducts } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../../components";

const ProductPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard
              key={product._id}
              img={product.image}
              price={product.price}
              name={product.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
