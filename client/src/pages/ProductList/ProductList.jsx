import { useState } from "react";
import Newsletter from "../../components/Newsletter";
import { Content } from "../../responsive";
import { useParams } from "react-router";
import Products from "../../components/Products/Products";
import { Container, FilterContainer, Left, Right } from "./ProductList.style";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { colors, sizes } from "./data";

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
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Color</InputLabel>
              <Select
                label="color"
                name="color"
                onChange={handleFilters}
                value={filters.color || ""}
              >
                {colors.map((color) => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Size</InputLabel>
              <Select
                name="size"
                onChange={handleFilters}
                label="size"
                value={filters.size || ""}
              >
                {sizes.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Left>

          <Right>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Sort</InputLabel>
              <Select
                onChange={(e) => setSort(e.target.value)}
                label="sort"
                value={sort}
              >
                <MenuItem value="latest">Latest</MenuItem>
                <MenuItem value="asc">Price (asc)</MenuItem>
                <MenuItem value="desc">Price (desc)</MenuItem>
              </Select>
            </FormControl>
          </Right>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
      </Content>
      <Newsletter />
    </Container>
  );
};

export default ProductList;
