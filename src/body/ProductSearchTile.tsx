import {
  Alignment,
  Avatar,
  Box,
  Button,
  ColumnLayout,
  GridLayout,
  Group,
  Heading2,
  Heading3,
  Paragraph,
  RowLayout,
  Spacer,
} from "@kounta/chameleon";
import { Product } from "../fixtures/products";

interface Props {
  product: Product;
}
export const ProductSearchTile = ({ product }: Props) => (
  <Group>
    <Box>
      <GridLayout fluid>
        <RowLayout>
          <ColumnLayout sm={2}>
            <Avatar imageUrl={product.picture} square size="large" />
          </ColumnLayout>
          <ColumnLayout>
            <Heading2>{product.name}</Heading2>
            <Paragraph>{product.supplier_name}</Paragraph>
          </ColumnLayout>
          <ColumnLayout>
            <Alignment horizontal="center" vertical="center">
              <Heading2>{product.price}</Heading2>
            </Alignment>
          </ColumnLayout>
          <ColumnLayout>
            <Alignment horizontal="center" vertical="center">
              <Button variant="primary">Add to cart</Button>
            </Alignment>
          </ColumnLayout>
        </RowLayout>
      </GridLayout>
    </Box>
    <Spacer spacing="s10" />
  </Group>
);
