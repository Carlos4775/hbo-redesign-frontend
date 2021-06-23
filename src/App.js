import "./App.css";
import "tailwindcss/tailwind.css";
import "./tailwind.output.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Menu} />
          <Route exacth path="/register" component={Register} />
          <Route exact path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
