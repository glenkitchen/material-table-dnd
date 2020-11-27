import React from "react";
import { Route, Switch } from "react-router-dom";
import { OrderColumnsPage } from "./OrderColumnsPage";
import Table from "./Table";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Table />
      </Route>
      <Route path="/ordercolumns">
        <OrderColumnsPage />
      </Route>
    </Switch>
  );
};

export default App;
