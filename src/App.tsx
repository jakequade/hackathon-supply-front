import React from "react";
import { Body } from "./body/Body";
import "./App.css";
import {
  ChameleonRoot,
  Group,
  IconArrowLeft,
  IconButton,
  IconHelp,
  PageHeader,
} from "@kounta/chameleon";
import { products } from "./fixtures/products";

function App() {
  return (
    <ChameleonRoot>
      <div className="App" style={styles.container}>
        <Header />
        <Body products={products} />
      </div>
    </ChameleonRoot>
  );
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column" as "column",
    height: "100%",
    width: "100%",
  },
};

const Header = () => {
  const left = (
    <IconButton>
      <IconArrowLeft />
    </IconButton>
  );

  const right = (
    <Group horizontal spacing="4px">
      <IconButton label="Help" labelFirst>
        <IconHelp width={20} height={20} />
      </IconButton>
    </Group>
  );
  return <PageHeader leftContent={left} rightContent={right} />;
};
export default App;
