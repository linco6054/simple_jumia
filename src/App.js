import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";

import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />

        <Route path="/Product/:productId" exact component={ProductDetail} />
        <Route>404 NOT FOUND</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
