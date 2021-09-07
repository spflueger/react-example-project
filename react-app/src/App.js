import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignIn from "./SignIn.js";
import Home from "./Home.js";
import "bootstrap/dist/css/bootstrap.min.css";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("tokens") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
