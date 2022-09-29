import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProductCategories } from "../../actions/productAction";
import { ProductCard } from "../../components";

import "./productcat.scss";

const ProductCategory = () => {
  const dispatch = useDispatch();

  const pathName = useLocation().pathname;
  const category = pathName.split("/")[2];

  console.log(category);

  const productCategory = useSelector((state) => state.productCategory);
  const { loading, error, products } = productCategory;

  useEffect(() => {
    dispatch(listProductCategories(category));
  }, [dispatch, category]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <section className="product-cat pt-14">
          <h1>Home > {category}</h1>
          <div className="product-cat__container mt-12">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                img={product.image}
                price={product.price}
                name={product.name}
                productId={product._id}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductCategory;
