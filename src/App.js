import "./App.css";
import "tailwindcss/tailwind.css";
import "./tailwind.output.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Menu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
