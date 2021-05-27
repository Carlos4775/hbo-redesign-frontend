import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const Content = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <Home />} />
      <Route exact path="/movie/:id" component={() => <MovieDetails />} />
      <Route exact path="/magazines" component={() => <span>Magazines</span>} />
      <Route exact path="/fields" component={() => <span>Fields</span>} />
    </Switch>
  );
};

export default Content;
