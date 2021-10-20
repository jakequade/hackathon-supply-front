import {
  Alignment,
  Box,
  Button,
  Card,
  ColumnLayout,
  Divider,
  GridLayout,
  Group,
  Heading3,
  Image,
  Label,
  Paragraph,
  RowLayout,
  Spacer,
} from "@kounta/chameleon";
import { createUseStyles } from "react-jss";
import React from "react";
import { BsStarFill } from "react-icons/bs";

export interface Props {
  product: any;
}

const product = {
  name: "Apples Red Delicious - Kg",
  image:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jessicagavin.com%2Fwp-content%2Fuploads%2F2017%2F11%2Fhow-to-select-apple-varieties-for-cooking-1200.jpg&f=1&nofb=1",
  price: 3.6,
  unit: "Kg",
  delivery_date: "Friday",
  min_order_price: 75,
  supplier_name: "Fruitique",
};

export const Tile = () => {
  const classes = styles();
  return (
    <Group className={classes.container}>
      <Card
        element={
          <Image
            imageUrl={product.image}
            height={"249px"}
            width={"290px"}
            objectFit={"cover"}
          />
        }
        width="252px"
        // height="452px"
        paddingSize="large"
      >
        <Group>
          <Label>{product.name}</Label>
          <Paragraph>
            ${product.price} per {product.unit}
          </Paragraph>
          <Divider />
          <GridLayout>
            <RowLayout>
              <ColumnLayout sm={6}>
                <Paragraph hint>Delivery</Paragraph>
              </ColumnLayout>
              <ColumnLayout sm={6}>
                <Alignment horizontal={"right"}>
                  <Paragraph>{product.delivery_date}</Paragraph>
                </Alignment>
              </ColumnLayout>
            </RowLayout>
            <Spacer spacing={"small"} />
            <RowLayout>
              <ColumnLayout sm={6}>
                <Paragraph hint>Min Order</Paragraph>
              </ColumnLayout>
              <ColumnLayout sm={6}>
                <Alignment horizontal={"right"}>
                  <Paragraph>${product.min_order_price}</Paragraph>
                </Alignment>
              </ColumnLayout>
            </RowLayout>
            <Spacer spacing={"small"} />
            <RowLayout>
              <ColumnLayout sm={6}>
                <Paragraph hint>Supplier</Paragraph>
              </ColumnLayout>
              <ColumnLayout sm={6}>
                <Alignment horizontal={"right"}>
                  <Paragraph align={"right"}>{product.supplier_name}</Paragraph>
                </Alignment>
              </ColumnLayout>
            </RowLayout>
            <Spacer spacing={"medium"} />
            <RowLayout>
              <Button variant="primary" fullWidth>
                Add to order
              </Button>
            </RowLayout>
          </GridLayout>
        </Group>
      </Card>
    </Group>
  );
};

const styles = createUseStyles({
  container: {
    padding: 20,
  },
});
