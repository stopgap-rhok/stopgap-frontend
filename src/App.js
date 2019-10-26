import React from "react";
import { Container, Header, Content } from "rsuite";

import StoreProvider from "./store";
import Form from "./components/Form";

import "rsuite/dist/styles/rsuite-default.css";
import styles from "./css/App.module.scss";

function App() {
  return (
    <StoreProvider>
      <Container>
        <Header className={styles.header}>
          <h1 className={styles.heading}>StopGap</h1>
        </Header>
        <Content className={styles.body}>
          <Form />
        </Content>
      </Container>
    </StoreProvider>
  );
}

export default App;
