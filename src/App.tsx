import React from "react";
import "./App.css";
import {
  ChameleonRoot,
  Group,
  IconArrowLeft,
  IconButton,
  IconHelp,
  PageHeader,
} from "@kounta/chameleon";
import { Tile } from "./Tile";

function App() {
  return (
    <ChameleonRoot>
      <div className="App" style={styles.container}>
        <Tile />
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

export default App;
