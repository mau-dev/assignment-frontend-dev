import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import theme from "./theme";
import NavigationMain from "./components/navigation/NavigationMain";
import HomeView from "./views/HomeView";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <NavigationMain />
          <Switch>
            <Route exact={true} path="/" component={HomeView} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
