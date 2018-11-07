import React from "react";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
// import Loadable from "react-loadable";
import { Provider } from "react-redux";
import store from "./store";
import Details from "./Details";
import Results from "./Results";
import SearchParams from "./SearchParams";

// const LoadableDetails = Loadable({
//   loader: () => {
//     return import("./Details");
//   },
//   loading() {
//     return <h1>loading split out code</h1>;
//   }
// });
// const LoadableResults = Loadable({
//   loader: () => {
//     return import("./Results");
//   },
//   loading() {
//     return <h1>loading split out code</h1>;
//   }
// });
// const LoadableSearchParams = Loadable({
//   loader: () => {
//     return import("./SearchParams");
//   },
//   loading() {
//     return <h1>loading split out code</h1>;
//   }
// });
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
