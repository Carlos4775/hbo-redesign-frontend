import "./App.css";
import "tailwindcss/tailwind.css";
import "./tailwind.output.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountInformation from "./components/AccountInformation";

/*function requireAuth(nextState, replace, next) {
  if (!authenticated) {
    replace({
      pathname: "/",
      state: {nextPathname: nextState.location.pathname}
    });
  }
  next();
}
*/

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/account" component={AccountInformation} />
          <Route path="/home" component={Menu} />
          <Route exacth path="/register" component={Register} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
