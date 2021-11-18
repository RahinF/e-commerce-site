import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { media } from "../responsive";
import {
  getProductsLoading,
  getProducts,
} from "../redux/products/products.selector";
import { Product } from "./Product";
import { loadProducts } from "../redux/products/products.thunk";

const Container = styled.div`
  ${media("sm", { display: "grid", gridTemplateColumns: "repeat(2, 1fr)" })}
  ${media("lg", { gridTemplateColumns: "repeat(3, 1fr)" })}
  ${media("xxl", { gridTemplateColumns: "repeat(4, 1fr)" })}
  margin-bottom: 3rem;
`;

const Products = ({ category, filters, sort }) => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getProductsLoading);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(loadProducts(category));
  }, [dispatch, category]);

  useEffect(() => {
    if (products) {
      let filtered = products.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key].includes(value)
        )
      );
      setFilteredProducts(filtered);
    }
  }, [category, products, filters]);

  useEffect(() => {
    if (sort === "latest") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => new Date(b.createdAt) -new Date(a.createdAt))
      );
    } else if (sort === "asc") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((products) =>
        [...products].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <Container>
          {category
            ? filteredProducts.map((product) => (
                <Product key={product.title} product={product} />
              ))
            : products.map((product) => (
                <Product key={product.title} product={product} />
              ))}
        </Container>
      )}
    </>
  );
};

export default Products;
