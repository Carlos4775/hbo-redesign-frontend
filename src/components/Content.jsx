import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import AccountInformation from "./AccountInformation";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/home/:id" component={MovieDetails} />
      <Route exact path="/home/account/:id" component={AccountInformation} />
      <Route exact path="/magazines" component={() => <span>Magazines</span>} />
      <Route exact path="/fields" component={() => <span>Fields</span>} />
    </Switch>
  );
};

export default Content;
