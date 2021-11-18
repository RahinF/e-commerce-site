import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import { Content } from "../../responsive";
import { useParams } from "react-router";
import Products from "../../components/Products";
import {
  Container,
  FilterContainer,
  FilterItem,
  FilterTitle,
  Left,
  Option,
  Right,
  Select,
} from "./ProductList.style";

const ProductList = () => {
  const { category } = useParams();

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilters = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Content>
        <h1>{category}</h1>
        <FilterContainer>
          <Left>
            <FilterItem>
              <FilterTitle>Color:</FilterTitle>
              <Select name="color" onChange={handleFilters}>
                <Option>red</Option>
                <Option>blue</Option>
                <Option>green</Option>
                <Option>yellow</Option>
                <Option>purple</Option>
              </Select>
            </FilterItem>
            <FilterItem>
              <FilterTitle>Size:</FilterTitle>
              <Select name="size" onChange={handleFilters}>
                <Option>xs</Option>
                <Option>s</Option>
                <Option>m</Option>
                <Option>l</Option>
                <Option>xl</Option>
              </Select>
            </FilterItem>
          </Left>

          <Right>
            <FilterItem>
              <FilterTitle>Sort:</FilterTitle>
              <Select onChange={(e) => setSort(e.target.value)}>
                <Option value="latest">Latest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
              </Select>
            </FilterItem>
          </Right>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
      </Content>
      <Newsletter />
    </Container>
  );
};

export default ProductList;
