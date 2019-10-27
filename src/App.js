import React from "react";

import Form from "./components/Form";
import { submitReport } from "./api";

import styles from "./css/App.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <Form onSubmit={submitReport} />
    </main>
  );
}

export default App;
