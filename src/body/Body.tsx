import React from "react";
import { createUseStyles } from "react-jss";
import { Grid, Row, Col } from "react-flexbox-grid";
import { FilterModalLeft } from "./FilterModalLeft";
import { ProductSearchTile } from "./ProductSearchTile";
import {
  Box,
  Button,
  Checkbox,
  CheckboxTable,
  Group,
  Heading2,
  Search,
  Spacer,
} from "@kounta/chameleon";
import { products } from "../fixtures/products";

export const Body = ({ products: [] }) => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Grid className={[classes.fullHeight]} fluid>
        <Row className={classes.fullHeight}>
          <FilterModalLeft />
          <Col xs={9}>
            <Box className={[classes.fullHeight]} showBorder={false}>
              <Search
                placeholder="Search for a product"
                searchText={""}
                searchLength={10}
                onChange={() => {}}
                onClear={() => {}}
                onEnterKeyPress={(val) =>
                  alert(`Enter key pressed with value ${val}`)
                }
                onSearchChanged={(val) => console.log("Debounced search ", val)}
              />
              <Spacer />
              <Heading2>Showing {products.length} results</Heading2>
              <Spacer />
              {products
                // for demo, only show results with images
                .filter((p) => p.picture)
                .map((product, i) => (
                  <ProductSearchTile product={product} />
                ))}
              <Group></Group>
            </Box>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

const styles = createUseStyles({
  container: {
    paddingTop: 10,
    height: "100%",
    width: "100%",
    // backgroundColor: "red",
  },
  fullHeight: {
    height: "100%",
  },
  leftPanel: {
    backgroundColor: "purple",
    height: "100%",
  },
  rightPanel: {
    backgroundColor: "pink",
    height: "100%",
  },
});
