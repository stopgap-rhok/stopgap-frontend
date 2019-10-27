import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Form from "./components/Form";
import { submitReport } from "./api";

import styles from "./css/App.module.scss";

function App() {
  return (
    <main className={styles.main}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/query" render={() => <div />} />
          <Route exact path="/thanks" render={() => <div>Thanks.</div>} />
          <Route
            render={({ history }) => (
              <Form
                onSubmit={async stuff => {
                  await submitReport(stuff);
                  history.push("/thanks");
                }}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
