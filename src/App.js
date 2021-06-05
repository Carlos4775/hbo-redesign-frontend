import "./App.css";
import "tailwindcss/tailwind.css";
import "./tailwind.output.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from "./pages/Login";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Menu} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
