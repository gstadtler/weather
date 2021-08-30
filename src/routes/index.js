import { BrowserRouter, Route, Switch } from "react-router-dom";
import CityClimateInfo from "../components/CityClimateInfo";
import Home from "../components/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route
          path="/:city/climate-info"
          render={(props) => <CityClimateInfo {...props} />}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
