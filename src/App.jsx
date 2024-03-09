import { Fragment } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
    </Fragment>
  );
};
