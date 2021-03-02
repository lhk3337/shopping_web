import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from "./Styles";
const products = [
  {
    id: 1,
    name: "Nike Air Max 97",
    description: "Nike Running shoes.",
    price: "₩199,000",
    image:
      "https://static-breeze.nike.co.kr/kr/ko_kr/cmsstatic/product/921826-101/9fbc87a7-b7ca-4f45-a642-d106e9292b37_primary.jpg",
  },
  {
    id: 2,
    name: "Macbook Pro M1",
    description: "Apple Macbook Pro",
    price: "₩1,690,000",
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1613673938000",
  },
];

const Products = () => {
  const classes = useStyle();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
