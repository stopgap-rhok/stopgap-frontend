import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import Query from "./components/Query";
import { submitReport } from "./api";

import styles from "./css/App.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/query" component={Query} />
          <Route render={() => <Form onSubmit={submitReport} />} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
