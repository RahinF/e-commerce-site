import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsLoading,
  getProducts,
} from "../../redux/products/products.selector";
import { Product } from "../Product";
import { loadProducts } from "../../redux/products/products.thunk";
import { Container } from "./Products.style";

const Products = ({ category, latest, filters, sort }) => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const isLoading = useSelector(getProductsLoading);

  const [filteredProducts, setFilteredProducts] = useState([]);

  // fetch products based on type (category, latest, etc)
  useEffect(() => {
    const filter = { category: category, latest: latest || false };

    dispatch(loadProducts(filter));
  }, [dispatch, category, latest]);

  // if filters exist apply them to the category selected
  useEffect(() => {
    if (filters) {
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
        [...products].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
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

  const loading = <div>Loading...</div>;

  const filtered = filteredProducts.map((product) => (
    <Product key={product.title} product={product} />
  ));

  const unfiltered = products.map((product) => (
    <Product key={product.title} product={product} />
  ));

  const component = <Container>{category ? filtered : unfiltered}</Container>;

  return isLoading ? loading : component;
};

export default Products;
