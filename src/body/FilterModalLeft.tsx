import { Box, Heading2, Spacer, Group, Checkbox } from "@kounta/chameleon";
import Col from "@kounta/chameleon/dist/components/GridLayout/ColumnLayout";
import { createUseStyles } from "react-jss";
export const FilterModalLeft = () => {
  const classes = styles();

  return (
    <Col className={classes.fullHeight} xs={2}>
      <Box className={[classes.fullHeight]}>
        <Spacer />
        <Group>
          <Heading2>Filter by</Heading2>
          <Checkbox label="Current specials" />
          <Checkbox label="Your pantry items" />
        </Group>
        <Spacer />
        <Group>
          <Heading2>Categories</Heading2>
          <Checkbox label="Fruit, Veg & Herbs" />
          <Checkbox label="Dairy & Eggs" />
        </Group>
      </Box>
    </Col>
  );
};

const styles = createUseStyles({
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
